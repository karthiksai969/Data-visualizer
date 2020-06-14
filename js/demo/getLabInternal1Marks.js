$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getLabinternal1Marks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            $('#labinternal1').text("LAB INTERNAL - 1 ( " + data[0]["sum(labinternal1)"] + " MARKS )");

        },
        error: function(data) {
            //console.log(data);
        }

    });

});