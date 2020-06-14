$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Mini/php/getMid2ScoredMarks.php',
        method: "GET",
        datatype: "json",
        success: function(data) {
            // console.log(data);
            $('#mid2score').text(data[0]["sum(mid2)"]);

        },
        error: function(data) {
            console.log(data);
        }
    });

});