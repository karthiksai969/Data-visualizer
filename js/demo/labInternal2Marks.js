$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/labInternal2Marks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            var subject = [];
            var labinternal2marks = [];

            for (var i in data) {
                subject.push(data[i].subject);
                labinternal2marks.push(data[i].labinternal2marks);
            }
            //console.log(marks);
            var chartdata = {
                labels: subject,
                datasets: [{
                    data: labinternal2marks,
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            };

            var ctx = $("#myPieChart2");
            var barGraph = new Chart(ctx, {
                type: 'doughnut',
                data: chartdata,

                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        borderColor: '#dddfeb',
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        caretPadding: 10,
                    },
                    legend: {
                        display: false
                    },

                    cutoutPercentage: 80,

                },
            });
        },
        error: function(data) {
            console.log(data);


        }

    });

});