$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getLabInternal2Marks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            $('#labinternal2').text("LAB INTERNAL -2 ( " + data[0]["sum(labinternal2)"] + " MARKS )");

        },
        error: function(data) {
            //console.log(data);
        }

    });

});