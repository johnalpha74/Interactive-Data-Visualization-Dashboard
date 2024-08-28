// Initialize charts
let lineChart, barChart, pieChart;

// Function to initialize charts
function initCharts() {
    Chart.register(ChartDataLabels);
    const ctx = {
        line: document.getElementById('lineChart').getContext('2d'),
        bar: document.getElementById('barChart').getContext('2d'),
        pie: document.getElementById('pieChart').getContext('2d')
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                font: {
                    weight: 'bold'
                }
            },
            tooltip: {
                enabled: false,
                external: externalTooltipHandler
            }
        }
    };

    lineChart = new Chart(ctx.line, {
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
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                datalabels: {
                    ...commonOptions.plugins.datalabels,
                    formatter: (value, context) => {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            }
        }
    });

    barChart = new Chart(ctx.bar, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Bar Chart Data',
                data: [],
                backgroundColor: 'rgb(75, 192, 192)'
            }]
        },
        options: commonOptions
    });

    pieChart = new Chart(ctx.pie, {
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
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                datalabels: {
                    ...commonOptions.plugins.datalabels,
                    formatter: (value, context) => {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            }
        }
    });
}

// Function to fetch data from API
async function fetchData(dataSet) {
    showLoadingIndicators();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

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
            line: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                data: [6, 8, 15, 3, 10, 7]
            },
            bar: {
                labels: ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'],
                data: [8, 12, 6, 9, 4, 7]
            },
            pie: {
                labels: ['Green', 'Blue', 'Yellow', 'Red'],
                data: [150, 200, 100, 50]
            }
        },
        set3: {
            line: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data: [5, 10, 8, 12, 15, 20, 18]
            },
            bar: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                data: [100, 150, 120, 180]
            },
            pie: {
                labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
                data: [30, 25, 20, 15, 10]
            }
        }
    };

    hideLoadingIndicators();
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

// Function to show loading indicators
function showLoadingIndicators() {
    document.querySelectorAll('.loading-indicator').forEach(indicator => {
        indicator.style.display = 'block';
    });
}

// Function to hide loading indicators
function hideLoadingIndicators() {
    document.querySelectorAll('.loading-indicator').forEach(indicator => {
        indicator.style.display = 'none';
    });
}

// External tooltip handler
function externalTooltipHandler(context) {
    const { chart, tooltip } = context;
    const tooltipEl = document.getElementById('tooltip');

    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    const innerHtml = [
        '<div class="tooltip-title">' + chart.data.labels[tooltip.dataPoints[0].dataIndex] + '</div>',
        '<div class="tooltip-body">Value: ' + tooltip.dataPoints[0].formattedValue + '</div>'
    ].join('');

    tooltipEl.innerHTML = innerHtml;

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
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