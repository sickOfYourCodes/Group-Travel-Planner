const total = async () => {
  const finalTotal = await individualAmounts();
  document.querySelector("#total").textContent = finalTotal;
};

const individualAmounts = () => {
  const amounts = document.getElementsByClassName("amount");
  let total = 0;
  for (let i = 0; i < amounts.length; i++) {
    const amount = parseInt(amounts[i].getAttribute("data-value"));
    total += amount;
    console.log(total);
  }
  console.log(total);
  return total;
};

total();
