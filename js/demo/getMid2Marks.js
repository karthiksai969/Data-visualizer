$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getMid2Marks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            $('#mid2').text("MID 1 ( " + data[0]["sum(maxmarks)"] + " MARKS )");

        },
        error: function(data) {
            //console.log(data);
        }

    });

});