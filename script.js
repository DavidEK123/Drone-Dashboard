let degree = 120;
$(document).ready(function() {
    $("#drone").css(
        "transform", "rotate("+degree+"deg)"
    );
    $.getJSON( "ajax/test.json", function( data ) {
      // Do something with data
    });
});
