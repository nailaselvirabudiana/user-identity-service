document.getElementById("loginForm").addEventListener("submit", async e => {
  e.preventDefault();
  const emailEl = document.getElementById("loginEmail");
  const passwordEl = document.getElementById("loginPassword");
  const result = await api("/auth/login", "POST", {
    email: emailEl.value,
    password: passwordEl.value
  });

  document.getElementById("loginResult").textContent =
    JSON.stringify(result, null, 2);

  if (result.token) {
    setToken(result.token);
    updateNav();
    setView("profile");
  }
});
