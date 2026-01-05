requireAuth();

document.getElementById("getForm").addEventListener("submit", async e => {
  e.preventDefault();
  const userIdEl = document.getElementById("profileUserId");
  const result = await api(`/users/${userIdEl.value}`, "GET");
  document.getElementById("profileResult").textContent =
    JSON.stringify(result, null, 2);
});
