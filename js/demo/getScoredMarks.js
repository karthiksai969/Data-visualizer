$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getScoredMarks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            // console.log(data);
            $('#mid1score').text(data[0]["sum(marks)"]);

        },
        error: function(data) {
            console.log(data);
        }
    });

});