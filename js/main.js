// Click the X button to remove an entry
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Click the list item to cross it out
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

//Add new entries to the list by pressing the enter key
$("input").keypress(function(enter){
	if(enter.which === 13){
		var value = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + value + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle(400);
});