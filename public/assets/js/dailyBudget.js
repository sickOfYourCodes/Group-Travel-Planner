const findUser = async () => {
  const user = document.querySelector(".user");
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

const addActivityBudget = async (event) => {
  event.preventDefault();
  const user = document.getElementsByClassName("user");
  let b = 0;
  for (let i = 0; i < user.length; i++) {
    if (user[i].checked == true) {
      b++;
    }
  }
  for (let m = 0; m < user.length; m++) {
    if (user[m].checked == true) {
      const trip_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 2
      ];
      const response = await fetch("/api/daily-budget/", {
        method: "POST",
        body: JSON.stringify({
          activity_name: document.querySelector("#activity_name").value,
          amount: parseInt(document.querySelector("#amount").value) / b,
          tripId: trip_id,
          userId: user[m].id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        window.location.reload();
      }
    }
  }
};
document.querySelector("#submit").addEventListener("click", addActivityBudget);
