//store category input in a varaible
const categoryInput =document.querySelector('.category-input');
//put user input into an array 
const categories = [categoryInput.value]
//store amount input in a varariable
const budgetInput = document.querySelector('amount');
const budget = [budgetInput.value]

//getting a reference to an element with an id of 'mychart' on the page and then getting a 2D context for the canvas element. 
const ctx = document.getElementById('mychart').getContext('2d')
// creates a new chart using the `Chart` constructor and passes it the `ctx`object(the canvas context) and a configuration object. 
let mychart = new Chart(ctx,{
    type:'pie',
    data: {
        //specifies the categories for the chart which are stored in the categories array
        labels: categories,
        // contains an array of object that define the data to be plotted on the chart. Each object has a label property that specifies the label for the data. 
        datasets: [
            {
                label:'budget',
                data: [0,0,0],
                backgroundColor: ['#2adece', '#dd3b79', '#ff766b' ],
                borderWidth:1

            }
        ]
    }

});

const updateChartValue =(input, dataOrder) => {
    input.addEventListener ('change', e => {
        mychart.data.datasets[0].data[dataOrder] = e.target.value;
        mychart.update();



    });
};

updateChartValue(categories, 0);
updateChartValue(budgetInput, 1);