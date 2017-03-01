$(document).ready(function() {
    $.ajax({
        url: "/data",
        success: function(data) {
            for (i = 0; i < data.articles.length; i++) {
                var artic = data.articles[i];
                $('#app').append("<hr>" + artic.titre + "<hr>" + artic.content + "<hr>");

            }
        },
        error: function(err) {
            console.log(err);
        }
    })
});