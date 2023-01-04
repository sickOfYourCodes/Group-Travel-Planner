function request() {
  console.log("hi");
  fetch(`/api/user/${req.session.user}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(data);
      // document.querySelector("#name").textContent = data;
    });
}

request();
