const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const requireRole = require("../middleware/requireRole");
const {
  listUsers,
  getUserById,
  getUserRawByEmail,
  createUser,
  updateProfile,
  updateEmployeeStatus
} = require("../data/store");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

/**
 * AUTH (Generic) - Login
 * POST /auth/login
 * body: { email, password }
 */
router.post("/auth/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "email and password required" });
  }

  const user = getUserRawByEmail(String(email));
  if (!user || user.password !== String(password)) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  if (user.status !== "active") {
    return res.status(403).json({ message: "User is not active" });
  }

  const token = jwt.sign(
    { user_id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  return res.json({
    token,
    user: { id: user.id, name: user.name, role: user.role, status: user.status }
  });
});

/**
 * USER IDENTITY (Core)
 * Subdomain: Registration
 * POST /users  (admin only)
 * body: { id, name, email, role, status, password }
 */
router.post("/users", auth, requireRole(["admin"]), (req, res) => {
  const { id, name, email, role, status, password } = req.body || {};
  if (!id || !name || !email) {
    return res.status(400).json({ message: "id, name, email are required" });
  }

  try {
    const created = createUser({
      id: String(id),
      name: String(name),
      email: String(email),
      role: role ? String(role) : "employee",
      status: status ? String(status) : "active",
      password: password ? String(password) : "12345"
    });
    return res.status(201).json(created);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

/**
 * USER IDENTITY (Core)
 * List users (admin only)
 * GET /users
 */
router.get("/users", auth, requireRole(["admin"]), (req, res) => {
  return res.json(listUsers());
});

/**
 * USER IDENTITY (Core)
 * Get profile
 * GET /users/:id
 * admin can access anyone
 * employee can access self only
 */
router.get("/users/:id", auth, (req, res) => {
  const targetId = String(req.params.id);

  if (req.user.role !== "admin" && req.user.user_id !== targetId) {
    return res.status(403).json({ message: "Employees can only access their own profile" });
  }

  const user = getUserById(targetId);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
});

/**
 * USER IDENTITY (Core)
 * Subdomain: Update Profile
 * PATCH /users/:id  (admin or self)
 * body: { name?, email? }
 */
router.patch("/users/:id", auth, (req, res) => {
  const targetId = String(req.params.id);

  const isAdmin = req.user.role === "admin";
  const isSelf = req.user.user_id === targetId;

  if (!isAdmin && !isSelf) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const updated = updateProfile(targetId, req.body || {});
  if (!updated) return res.status(404).json({ message: "User not found" });
  return res.json(updated);
});

/**
 * USER IDENTITY (Core)
 * Subdomain: Employee Status
 * PATCH /users/:id/status (admin only)
 * body: { status: "active" | "inactive" | "resigned" }
 */
router.patch("/users/:id/status", auth, requireRole(["admin"]), (req, res) => {
  const targetId = String(req.params.id);
  const { status } = req.body || {};
  if (!status) return res.status(400).json({ message: "status required" });

  const allowed = ["active", "inactive", "resigned"];
  if (!allowed.includes(String(status))) {
    return res.status(400).json({ message: `status must be one of: ${allowed.join(", ")}` });
  }

  const updated = updateEmployeeStatus(targetId, String(status));
  if (!updated) return res.status(404).json({ message: "User not found" });
  return res.json(updated);
});

module.exports = router;
