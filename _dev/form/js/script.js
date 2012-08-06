
jQuery.fn.togForm = function() {
    var form = $(this[0]) // It's your element
    var lines = form.html().split("\n");
    $.each(lines, function(n, elem) {
        elem = $.trim(elem);
        console.log(elem);
        if(elem != '')
            {
                //form.html().('<div class="new" />');
            }
    });
};