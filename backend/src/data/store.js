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
  { id: "U011", name: "Rizky Maulana", email: "rizky@company.com" },
  { id: "U012", name: "Dian Permata", email: "dian@company.com" },
  { id: "U013", name: "Hendra Wijaya", email: "hendra@company.com" },
  { id: "U014", name: "Lina Kusuma", email: "lina@company.com" },
  { id: "U015", name: "Rudi Hartono", email: "rudi@company.com" },
  { id: "U016", name: "Maya Sari", email: "maya@company.com" },
  { id: "U017", name: "Bambang Susilo", email: "bambang@company.com" },
  { id: "U018", name: "Ratna Dewi", email: "ratna@company.com" },
  { id: "U019", name: "Yudi Prasetyo", email: "yudi@company.com" },
  { id: "U020", name: "Ayu Lestari", email: "ayu@company.com" },
  { id: "U021", name: "Hadi Setiawan", email: "hadi@company.com" },
  { id: "U022", name: "Indah Permatasari", email: "indah@company.com" },
  { id: "U023", name: "Wahyu Nugroho", email: "wahyu@company.com" },
  { id: "U024", name: "Sri Rahayu", email: "sri@company.com" },
  { id: "U025", name: "Teguh Santoso", email: "teguh@company.com" },
  { id: "U026", name: "Fitri Handayani", email: "fitri@company.com" },
  { id: "U027", name: "Dedi Kurniawan", email: "dedi@company.com" },
  { id: "U028", name: "Mega Pratiwi", email: "mega@company.com" },
  { id: "U029", name: "Joko Widodo", email: "joko@company.com" },
  { id: "U030", name: "Eka Wati", email: "eka@company.com" },
  { id: "U031", name: "Arif Rahman", email: "arif@company.com" },
  { id: "U032", name: "Sari Puspita", email: "sari@company.com" },
  { id: "U033", name: "Iwan Setiawan", email: "iwan@company.com" },
  { id: "U034", name: "Novi Anggraini", email: "novi@company.com" },
  { id: "U035", name: "Anton Budiman", email: "anton@company.com" },
  { id: "U036", name: "Lia Maharani", email: "lia@company.com" }
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
