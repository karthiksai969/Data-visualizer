$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/barChart2.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            // console.log(data);
            var subject = [];
            var mid2 = [];

            for (var i in data) {
                subject.push(data[i].Subject);
                mid2.push(data[i].mid2);
            }
            //console.log(marks);
            var chartdata = {
                labels: subject,
                datasets: [{
                    label: ' mid2',
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#4e73df', '#1cc88a', '#36b9cc', '#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                    data: mid2

                }]
            };

            var ctx = $("#myAreaChart2");
            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata,

                options: {
                    //responsive: true,
                    maintainAspectRatio: false,
                    tooltips: {
                        //backgroundColor: "rgba(234, 236, 244, 1)",
                        //bodyFontColor: "#858796",
                        //borderColor: '#dddfeb',
                        borderWidth: 10,
                        //xPadding: 15,
                        //yPadding: 15,
                        displayColors: false,
                        //caretPadding: 20,
                        //scaleLineColor: 'transparent'
                    },
                    legend: {
                        display: false
                    },
                    //cutoutPercentage: 80,
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