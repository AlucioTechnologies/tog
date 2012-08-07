
jQuery.fn.togForm = function() {
    var form = $(this[0]) // It's your element
    var lines = form.html().split("\n");
    form.html('<ul></ul>')
    $.each(lines, function(n, elem) {
        
        elem = $.trim(elem);
        
        if(elem != '')
        {
            elem = elem.replace('<br>', '');
            elem = elem.replace('<br/>', '');
            form.children("ul").append('<li>' + elem + '</li>');
        }
        
    });
    
    form.children("ul").children("li").each(function(n, elem) {
        text = $(this).text();
        $(this).html($(this).html().replace(text,'<label>'+text+'</label>'));
    });
};