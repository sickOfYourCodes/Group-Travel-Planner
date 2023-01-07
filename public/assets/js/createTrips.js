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
  });
  if (response.ok) {
    document.location.replace("/dashboard/trips");
  } else {
    alert("Failed to create trip. Please try again.");
  }
};

document.querySelector(".createbtn").addEventListener("click", createTrip);
