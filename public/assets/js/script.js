const logBtn = async function (event) {
  if (req.sessions.loggedIn) {
    document.querySelector("#logBtn").textContent = "Log Out"
  }

}