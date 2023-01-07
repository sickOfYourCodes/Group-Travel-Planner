const logOut = async function (event) {
  event.preventDefault();
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to logout. Please try again.");
  }
};

document.querySelector(".Logout").addEventListener("click", logOut);
