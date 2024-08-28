// Initialize charts
let lineChart, barChart, pieChart;

// Function to initialize charts
function initCharts() {
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const barCtx = document.getElementById('barChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');

    lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Line Chart Data',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Bar Chart Data',
                data: [],
                backgroundColor: 'rgb(75, 192, 192)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Pie Chart Data',
                data: [],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Function to fetch data from API
async function fetchData(dataSet) {
    // In a real application, you would fetch data from an actual API
    // For this example, we'll use mock data
    const mockData = {
        set1: {
            line: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                data: [12, 19, 3, 5, 2, 3]
            },
            bar: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                data: [12, 19, 3, 5, 2, 3]
            },
            pie: {
                labels: ['Red', 'Blue', 'Yellow'],
                data: [300, 50, 100]
            }
        },
        set2: {
            // ... (similar structure for set2)
        },
        set3: {
            // ... (similar structure for set3)
        }
    };

    return mockData[dataSet];
}

// Function to update charts
function updateCharts(data) {
    lineChart.data.labels = data.line.labels;
    lineChart.data.datasets[0].data = data.line.data;
    lineChart.update();

    barChart.data.labels = data.bar.labels;
    barChart.data.datasets[0].data = data.bar.data;
    barChart.update();

    pieChart.data.labels = data.pie.labels;
    pieChart.data.datasets[0].data = data.pie.data;
    pieChart.update();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    fetchData('set1').then(updateCharts);

    document.getElementById('refreshData').addEventListener('click', () => {
        const selectedDataSet = document.getElementById('dataSet').value;
        fetchData(selectedDataSet).then(updateCharts);
    });

    document.getElementById('dataSet').addEventListener('change', (event) => {
        fetchData(event.target.value).then(updateCharts);
    });
});