$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getMarks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            $('#mid1').text("MID 1 ( " + data[0]["sum(maxmarks)"] + " MARKS )");

        },
        error: function(data) {
            //console.log(data);
        }

    });

});