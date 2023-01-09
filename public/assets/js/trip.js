const addVacationSelf = async (event) => {
  event.preventDefault();
  const trip_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(trip_id);
  // console.log(document.querySelector("#start-date").value);
  // console.log(document.querySelector("#end-date").value);
  const response = await fetch("/api/vacation/", {
    method: "POST",
    body: JSON.stringify({
      tripId: trip_id,
      userId: document.querySelector("#session_inf").getAttribute("data-value"),
      //   start_date: document.querySelector("#start-date").value,
      //   end_date: document.querySelector("#end-date").value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  window.location.reload();
};

const findUser = async () => {
  const user = document.querySelector("#add-user").value;
  try {
    const userResponse = await fetch(`/api/user/${user}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return userResponse.json();
  } catch (err) {
    alert("There was no user with that username, please try again.");
  }
};

const addVacationUser = async (event) => {
  event.preventDefault();
  findUser().then(async function (result) {
    console.log(result);
    const trip_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const response = await fetch("/api/vacation/", {
      method: "POST",
      body: JSON.stringify({
        tripId: trip_id,
        userId: result.id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.reload();
    }
  });
};

document
  .querySelector("#userSubmit")
  .addEventListener("click", addVacationUser);
document.querySelector("#submit").addEventListener("click", addVacationSelf);
