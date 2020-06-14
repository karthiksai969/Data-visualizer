$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getLabInternal2ScoredMarks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            // console.log(data);
            $('#labinternal2score').text(data[0]["sum(labinternal2marks)"]);

        },
        error: function(data) {
            console.log(data);
        }
    });

});