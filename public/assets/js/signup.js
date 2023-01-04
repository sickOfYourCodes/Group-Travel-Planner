const signup = async function (event) {
  event.preventDefault();
  const first_name = document.querySelector("#fname").value;
  const last_name = document.querySelector("#lname").value;
  const user_name = document.querySelector("#uname").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const password2 = document.querySelector("#password2").value;
  if (password !== password2) {
    alert("Please make sure your passwords match.");
    return;
  }
  const response = await fetch("/api/user/", {
    method: "POST",
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
      email: email,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to signup. Please try again.");
  }
};

document.querySelector(".signupbtn").addEventListener("click", signup);
