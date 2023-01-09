// Get a reference to the canvas element
const canvas = document.getElementById('mychart');

// Get a 2D context for the canvas element
const ctx = canvas.getContext('2d');

// Initialize the data and labels arrays for the chart
const data = [];
const labels = [];

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

// Get a reference to the form element
const budgetForm = document.getElementById('budget-form');

// Add a submit event listener to the form
budgetForm.addEventListener('submit', (e) => {
  // Prevent the form from submitting
  e.preventDefault();
