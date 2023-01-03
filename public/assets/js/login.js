function login() {
  const user_name = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ user_name, password }),
    headers: { "Content-Type": "applications/json" },
  }).then(() => {
    if (response.ok) {
      document.location.replace("google.com");
    }
  });
}

document.querySelector("#login").addEventListener("click", login);
