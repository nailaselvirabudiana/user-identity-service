// In-memory store (untuk tugas akademik)
// Data akan reset jika container restart

const users = new Map();

// ===== SEED USERS =====

// Admin
users.set("U001", {
  id: "U001",
  name: "Admin HR",
  email: "admin@company.com",
  role: "admin",
  status: "active",
  password: "admin123",
  createdAt: new Date().toISOString()
});

// Employee seeds
const employeeSeeds = [
  { id: "U002", name: "Budi Santoso", email: "budi@company.com" },
  { id: "U003", name: "Siti Aminah", email: "siti@company.com" },
  { id: "U004", name: "Andi Pratama", email: "andi@company.com" },
  { id: "U005", name: "Rina Wulandari", email: "rina@company.com" },
  { id: "U006", name: "Dewi Lestari", email: "dewi@company.com" },
  { id: "U007", name: "Agus Saputra", email: "agus@company.com" },
  { id: "U008", name: "Nina Kurnia", email: "nina@company.com" },
  { id: "U009", name: "Fajar Nugroho", email: "fajar@company.com" },
  { id: "U010", name: "Putri Ayu", email: "putri@company.com" },
  { id: "U011", name: "Rizky Maulana", email: "rizky@company.com" }
];

employeeSeeds.forEach((e) => {
  users.set(e.id, {
    id: e.id,
    name: e.name,
    email: e.email,
    role: "employee",
    status: "active",
    password: "employee123",
    createdAt: new Date().toISOString()
  });
});

// ===== HELPER FUNCTIONS =====

function listUsers() {
  return Array.from(users.values()).map(stripPassword);
}

function getUserById(id) {
  const u = users.get(id);
  return u ? stripPassword(u) : null;
}

function getUserRawByEmail(email) {
  return Array.from(users.values()).find(u => u.email === email) || null;
}

function createUser({ id, name, email, role, status, password }) {
  if (users.has(id)) throw new Error("User ID already exists");
  if (getUserRawByEmail(email)) throw new Error("Email already exists");

  const newUser = {
    id,
    name,
    email,
    role: role || "employee",
    status: status || "active",
    password: password || "12345",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  users.set(id, newUser);
  return stripPassword(newUser);
}

function updateProfile(id, patch) {
  const u = users.get(id);
  if (!u) return null;

  if (patch.name !== undefined) u.name = String(patch.name);
  if (patch.email !== undefined) u.email = String(patch.email);
  u.updatedAt = new Date().toISOString();

  users.set(id, u);
  return stripPassword(u);
}

function updateEmployeeStatus(id, status) {
  const u = users.get(id);
  if (!u) return null;

  u.status = status;
  u.updatedAt = new Date().toISOString();

  users.set(id, u);
  return stripPassword(u);
}

function stripPassword(user) {
  const { password, ...rest } = user;
  return rest;
}

module.exports = {
  listUsers,
  getUserById,
  getUserRawByEmail,
  createUser,
  updateProfile,
  updateEmployeeStatus
};
