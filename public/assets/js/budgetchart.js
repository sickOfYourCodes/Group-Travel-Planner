/// Get a reference to the canvas element
const canvas = document.getElementById('mychart');

// Get a 2D context for the canvas element
const ctx = canvas.getContext('2d');

// Get a list of all input elements with the name "amount"
const budgetInputs = document.querySelectorAll('input[name="amount"]');

// Initialize an array to store the data for the chart
const data = [];

// Iterate over the list of input elements
budgetInputs.forEach((budgetInput) => {
  // Get the value of the input element
  const value = budgetInput.value;

  // Add the value to the data array
  data.push(value);
});

// Get a list of all input elements with the class "category-input"
const categoryInputs = document.querySelectorAll('.category-input');

// Initialize an array to store the labels for the chart
const labels = [];

// Iterate over the list of input elements
categoryInputs.forEach((categoryInput) => {
  // Get the value of the input element
  const label = categoryInput.value;

  // Add the label to the labels array
  labels.push(label);
});

// Create a new pie chart using the Chart constructor
const pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: ['#2adece', '#dd3b79', '#ff766b'],
      borderWidth: 1
    }]
  }
});

// Add an event listener to each budget input element
budgetInputs.forEach((budgetInput, index) => {
    budgetInput.addEventListener('change', (e) => {
      // Update the value in the data array with the new value
      data[index] = e.target.value;
  
      // Update the chart
      pieChart.update();
    });
  });
  
  // Add an event listener to each category input element
  categoryInputs.forEach((categoryInput, index) => {
    categoryInput.addEventListener('change', (e) => {
      // Update the label in the labels array with the new value
      labels[index] = e.target.value;
  
      // Update the chart
      pieChart.update();
    });
  });