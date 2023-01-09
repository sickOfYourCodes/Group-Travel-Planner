// onclick = "document.getElementById('id01').style.display='block'";
// onclick = "document.getElementById('id01').style.display='none'";

import Chart from 'chart.js';

$(document).ready(function() {
    // Form submit event handler
    $('#budgetForm').submit(function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form input values
      var category = $('#category').val();
      var amount = $('#amount').val();
  
      // Update pie chart data
      var data = {
        labels: [category], // Add new category to labels
        datasets: [{
          data: [amount], // Add new amount to data
          backgroundColor: ["#FF6384"], // Add new color for new data point
        }]
      };
      
      function generatePieChart(data) {
        // Get the pie chart canvas
        var ctx = $("#pieChart");
    
        // Create the pie chart
        var pieChart = new Chart(ctx, {
          type: 'pie',
          data: data,
        });
      }
      // Generate pie chart
      generatePieChart(data);
    });
  
    // Generate pie chart function
  });
  
