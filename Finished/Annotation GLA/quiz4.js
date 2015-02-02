function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz4.html";
	curQuiz=4;
	curQuizRedirect=29;
	
	addQuestion("After you finish annotating a text, you don't have to review it again.", "True", "False", "", "", 2);
	addQuestion("After annotating a text, you can review by making a list of the information you found interesting.", "True", "False", "", "", 1);
	addQuestion("When you write a summary, it will be just as long as the original text.", "True", "False", "", "", 2);
	addQuestion("Writing and answering sample quiz questions will help you remember a reading better.", "True", "False", "", "", 1);
	addQuestion("One benefit of reviewing your readings is that it will help you forget the readings more quickly.", "True", "False", "", "", 2);
	
	//----------------------------------------------------------
	display();
}