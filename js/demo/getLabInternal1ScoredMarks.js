$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getLabInternal1ScoredMarks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            //console.log(data);
            $('#labinternal1score').text(data[0]["sum(labinternal1marks)"]);

        },
        error: function(data) {
            console.log(data);
        }
    });

});