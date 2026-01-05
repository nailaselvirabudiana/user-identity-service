requireAuth();

document.getElementById("updateForm").addEventListener("submit", async e => {
  e.preventDefault();
  const userIdEl = document.getElementById("updateUserId");
  const nameEl = document.getElementById("updateName");
  const emailEl = document.getElementById("updateEmail");
  const body = {};
  if (nameEl.value) body.name = nameEl.value;
  if (emailEl.value) body.email = emailEl.value;

  const result = await api(`/users/${userIdEl.value}`, "PATCH", body);
  document.getElementById("updateResult").textContent =
    JSON.stringify(result, null, 2);
});
