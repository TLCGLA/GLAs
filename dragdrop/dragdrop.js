var answers = new Array();

function makeDraggable(){
	//make draggable stuff draggable
	$( ".draggable" ).draggable();
	
	//make droppable stuff droppable
	$( ".droppable" ).droppable({
		 drop: function( event, ui ) {
			$( this )
			.removeClass("answer")
			.addClass("highlight")
			.find("p")
			.html(" ");
			answerQuestion(ui.draggable.attr("id"));
			answers.push(ui.draggable.attr("id"));
			
		},
		out: function(event, ui) {
			
			for(var i in answers)
			{
				if(answers[i] === ui.draggable.attr("id"))
				{
					//remove from array so it can be used again
					$(this)
					.removeClass("highlight")
					.addClass("answer")
					.find("p")
					.html("Drop here");
					
					answers.splice(i, 1);
				}
			}
		
			
		}
	});
}