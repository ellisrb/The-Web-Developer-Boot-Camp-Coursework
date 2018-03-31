//check off todos by clicking
	$("ul").on("click", "li", function(){
		//if li is grey
		// if($(this).css("color") === "rgb(128, 128, 128)")
		// {//turn it black
		// 	$(this).css(
		// 	{
		// 	color:"black",
		// 	textDecoration:"none"
		// 	}
		// );
		// //else
		// }
		// else
		// {//turn it grey
		// 	$(this).css(
		// 		{
		// 		color:"grey",
		// 		textDecoration:"line-through"
		// 		}
		// 	);
		// }
				//or
		$(this).toggleClass("completed")
	});


	//X (span) to delete the todo
	$("ul").on("click", "span", function(event){
		event.stopPropagation();
		$(this).parent().fadeOut(600,function(){
			$(this).remove();
		});
	});

	//Add to the todo list
	$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			//get the text input
			let todoText = $(this).val();
			$(this).val("");
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		}
	});

	$(".fa-plus").on("click", function(){
		$("input[type='text']").fadeToggle();
	});