function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	
	addQuestion("Annotations are the notes students make on a text.", "T", "F", "", "", 1);
	addQuestion("Annotations have to be made on the pages of the book you are reading.", "T", "F", "", "", 2);
	addQuestion("Annotating can help students prepare for exams.", "T", "F", "", "", 1);
	addQuestion("The foresight bias helps students remember information better.", "T", "F", "", "", 2);
	addQuestion("Reading without annotating and reading with annotating takes the same amount of time.", "T", "F", "", "", 2);
	
	//----------------------------------------------------------
	display();
}