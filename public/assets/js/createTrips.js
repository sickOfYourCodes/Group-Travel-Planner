const createTrip = async function (event) {
  event.preventDefault();
  const trip_name = document.querySelector("#tname").value;
  const location = document.querySelector("#location").value;
  const description = document.querySelector("#description").value;
  const numPeople = document.querySelector("#numPeople").value;
  const response = await fetch("/api/trip/", {
    method: "POST",
    body: JSON.stringify({
      trip_name: trip_name,
      location: location,
      description: description,
      numPeople: numPeople,
    }),
    headers: { "Content-Type": "application/json" },
  })
  return trip_name
};

const getTripId = async function (tripName) {
  await fetch(`/api/trip/tripname/${tripName}`, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data)
    const id = data.id;
    return id;
  })
}

const createVacation = async function (event) {
  await fetch("/api/vacation", {
  method: "POST",
  body: JSON.stringify({
    tripId: getTripId(createTrip(event)),
    userId: sessionStorage.getItem("user").id,
  })
})  
  if (response.ok) {
    document.location.replace("/dashboard/trips/");
  } else {
    alert("Failed to create trip. Please try again.");
  }
}

document.querySelector(".createbtn").addEventListener("click", createVacation);
