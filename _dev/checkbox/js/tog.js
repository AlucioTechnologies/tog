/*Custom CheckBox */

//Hide Current Checkbox


jQuery.fn.togCheckBox=function()
{
    var obj = $(this[0]);
    $(this).hide();

//Add a replacement for custom checkBox
$(this).after("<div class='togCheckBoxReplacement'></<div>")

//Attach click Functionalily
$(".togCheckBoxReplacement").live("click",function(){
      
    //Check if the btn is checked previously
    if($(this).prev().attr("checked")=="checked")
    {
        
        $(this).prev().removeAttr("checked");
          $(this).removeClass("togCheckBoxReplacementHvr");
            
    }
    else
    {
    
        $(this).prev().attr("checked","checked");
   
        $(this).addClass("togCheckBoxReplacementHvr");
    }
    
  
});
}