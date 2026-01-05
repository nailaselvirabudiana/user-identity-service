requireAuth();

document.getElementById("regForm").addEventListener("submit", async e => {
  e.preventDefault();
  const idEl = document.getElementById("regId");
  const nameEl = document.getElementById("regName");
  const emailEl = document.getElementById("regEmail");
  const roleEl = document.getElementById("regRole");
  const result = await api("/users", "POST", {
    id: idEl.value,
    name: nameEl.value,
    email: emailEl.value,
    role: roleEl.value
  });
  document.getElementById("registerResult").textContent =
    JSON.stringify(result, null, 2);
});
