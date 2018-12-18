// Check off a to-do list
$("ul").on("click", "li", function()      {
      $(this).toggleClass("completed");
});

//To delete a list, on clicking delete
$("ul").on("click", "span", function(event)    {
      //$(this).delete
      $(this).parent().fadeOut(500, function() {
            $(this).remove();
      });
      event.stopPropagation();
});

$("input[type='text']").keypress(function(event)     {
      if(event.which === 13)  {
            //Grabbing the todo text
            var todoText = $(this).val();
            $(this).val(""); 
            //Create new list
            $("ul").append("<li> <span> <i class='fa fa-trash' aria-hidden='true'></i> </span>" + todoText + "</li>")
      }
});

$(".fa-plus").click(function()      {
      $("input[type='text']").fadeToggle();
})