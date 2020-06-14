$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/barChart.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            var subject = [];
            var marks = [];

            for (var i in data) {
                subject.push(data[i].Subject);
                marks.push(data[i].marks);
            }
            //console.log(marks);
            var chartdata = {
                labels: subject,
                datasets: [{
                    label: ' marks',
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#4e73df', '#1cc88a', '#36b9cc', '#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                    data: marks

                }]
            };

            var ctx = $("#myAreaChart");
            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata,

                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        //backgroundColor: "rgb(255,255,255)",
                        //bodyFontColor: "#858796",
                        //borderColor: '#dddfeb',
                        borderWidth: 1,
                        //xPadding: 15,
                        //yPadding: 15,
                        displayColors: false,
                        //caretPadding: 10,
                    },
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 80,


                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false,

                            }
                        }],
                        yAxes: [{
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 30
                            },
                            gridLines: {
                                drawOnChartArea: false

                            }
                        }]
                    }
                },
            });
        },
        error: function(data) {
            console.log(data);


        }

    });

});