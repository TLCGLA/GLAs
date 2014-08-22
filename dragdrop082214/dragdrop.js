var answers = new Array();
var det  = new Array();

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
			.html(ui.draggable.html());
			
			var id = ui.draggable.attr("id");
			
			$(this)
			.find("p")
			.attr("id", id);
			
			answerQuestion(id);
			answers.push(id);
			//det = ui.draggable();
			ui.draggable.remove();
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
					$(document).det[i].attach();
					det[i] = null;
				}
			}
		
			
		}
	});
}