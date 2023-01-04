const login = async function (event) {
  event.preventDefault();
  const user_name = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ user_name: user_name, password: password }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login. Please try again.");
  }
};

document.querySelector("#login").addEventListener("click", login);
