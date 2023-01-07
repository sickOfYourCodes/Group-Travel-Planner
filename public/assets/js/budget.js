const amountInput = document.getElementById("number");
const addForm = document.getElementById("addForm");

const budgetAmount = document.getElementById("budgetAmount");
const balanceAmount = document.getElementById("balanceAmount");

function getBudgetAmount(amount) {
if (!amount) {
amountInput.style.border = "1px solid #b80c09";
amountInput.placeholder = "input can not be empty";
amountInput.style.color = "#b80c09";
setTimeout(() => {
  amountInput.style.color = "#495057";
  amountInput.style.border = "1px solid gray";
}, 3000);
} else {
budgetAmount.innerText = amount;
balanceAmount.innerText = amount;
expenseForm.style.display = "block";
budgetform.style.display = "none";
editForm.style.display = "none";
amountInput.value = "";
}
}

addForm.addEventListener("submit", (e) => {
e.preventDefault();
getBudgetAmount(amountInput.value);
});
const expForm = document.getElementById("expForm");
let expName = document.getElementById("expName");
let expNumber = document.getElementById("expNumber");

let id = 0;
let details = [];

function addExpenses(name, number) {
if (!name.length || !number.length) {
expName.style.border = "1px solid #b80c09";
expName.placeholder = "input can not be empty";
expName.style.color = "#b80c09";

expNumber.style.border = "1px solid #b80c09";
expNumber.placeholder = "input can not be empty";
expNumber.style.color = "#b80c09";

setTimeout(() => {
  expName.style.color = "#495057";
  expName.style.border = "1px solid gray";
  expName.placeholder = "input can not be empty";

  expNumber.placeholder = "input can not be empty";
  expNumber.style.border = "1px solid gray";
  expNumber.style.color = "#495057";
}, 3000);
} else {
const userExp = {
  id: id,
  name: name,
  number: parseInt(number),
};
details.push(userExp);
displayExp(details);
id++;
expName.value = "";
expNumber.value = "";
}
}

expForm.addEventListener("submit", (e) => {
e.preventDefault();
addExpenses(expName.value, expNumber.value);
});
{
    expValue.innerHTML = null;
    for (i = 0; i < details.length; i++) {
    expValue.innerHTML += `
    `;
}
calcExpenses();
displayExpenses.style.display = "block";
}
function calcExpenses() {
let totalExp = 0;
for (i = 0; i < details.length; i++) {
totalExp = details[i].number + totalExp;
}
expensesAmount.innerText = totalExp;
updateBalance();
}

function updateBalance() {
balanceAmount.innerText =
parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
}
function editExpDetails(id) {
    expenseForm.style.display = "none";
    budgetform.style.display = "none";
    editForm.style.display = "We block";
    details.findIndex((item) => {
    if (item.id === id) {
      editExpName.value = item.name;
      editExpNumber.value = item.number;
      saveEdit.children[2].id = item.id;
      modal.style.display = "block";
    }
    });
    }const editForm = document.getElementById("editForm");
    const saveEdit = document.getElementById("saveEdit");
    const editExpValue = document.getElementById("editExpValue");
    const editExpNumber = document.getElementById("editExpNumber");
    
    function getExpValue(editExpName, editExpNumber, id) {
    edited = details.findIndex((obj) => obj.id == id);
    details[edited].name = editExpName;
    details[edited].number = parseInt(editExpNumber);
    displayExp(details);
    }
    
    saveEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    getExpValue(editExpName.value, editExpNumber.value, saveEdit.children[2].id);
    });
    function delExpenseDetails(id) {
    let index = details.findIndex((item) => item.id === id);
    details.splice(index, 1);
    displayExp(details);
    }
    
    