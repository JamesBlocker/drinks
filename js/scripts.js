$(document).ready(function() {
    var over21 = confirm("Are you older than 21? Click OK for Yes and Cancel for No");

    if (over21) {
        $('#drinks').show();
    } else {
        $('#under-21').show();
    }
});
