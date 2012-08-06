/*Custom CheckBox */

//Hide Current Checkbox
$(".togCheckBox").hide();

//Add a replacement for custom checkBox
$(".togCheckBox").after("<div class='togCheckBoxReplacement'></<div>")

//Attach click Functionalily
$(".togCheckBoxReplacement").live("click",function(){
      
    //Check if the btn is checked previously
    if($(".togCheckBoxReplacement").attr("checked")=="checked")
        {
        
            $(".togCheckBoxReplacement").removeAttr("checked");
            $(".togCheckBoxReplacement").removeClass("togCheckBoxReplacementHvr");
            
        }
        else
            {
    
   $(".togCheckBoxReplacement").attr("checked","checked");
   
    $(".togCheckBoxReplacement").addClass("togCheckBoxReplacementHvr");
            }
    
  
});