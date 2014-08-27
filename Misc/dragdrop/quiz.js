function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	
	var questions = new Array();
	
	questions[0] = new Object;
	questions[0].question = "Table of Contents";
	questions[0].answers = new Array("A list of the parts of a book organized in the order in which the parts appear.");
	questions[0].correctAnswer = 4;
	
	questions[1] = new Object;
	questions[1].question = "Index";
	questions[1].answers = new Array("An alphabetized list of the textbook's topics.");
	questions[1].correctAnswer = 6;
	
	questions[2] = new Object;
	questions[2].question = "Learning Objectives";
	questions[2].answers = new Array("The information a student should learn from reading a textbook chapter.");
	questions[2].correctAnswer = 7;
	
	questions[3] = new Object;
	questions[3].question = "Call-out boxes";
	questions[3].answers = new Array("Boxes that define a vocabulary word or discuss a particular topic in depth.");
	questions[3].correctAnswer = 3;
	
	questions[4] = new Object;
	questions[4].question = "Abstract";
	questions[4].answers = new Array("A summary of a journal article");
	questions[4].correctAnswer = 1;
	
	questions[5] = new Object;
	questions[5].question = "Discussion";
	questions[5].answers = new Array("Explains what authors learn from conducting an experiment.");
	questions[5].correctAnswer = 5;
	
	questions[6] = new Object;
	questions[6].question = "References";
	questions[6].answers = new Array("A list of an author's sources");
	questions[6].correctAnswer = 2;	
	
	addQuestions(questions, true);
	
	//----------------------------------------------------------
	displayDraggable();
}