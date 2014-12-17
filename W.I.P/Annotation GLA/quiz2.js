function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=13;
	
	addQuestion("If you can figure out what an author thinks is important, you will probably understand the reading well.", "T", "F", "", "", 1);
	addQuestion("Sometimes, the author will tell you when information is important.", "T", "F", "", "", 1);
	addQuestion("All information in a reading is equally important.", "T", "F", "", "", 2);
	addQuestion("Images in a reading are important.", "T", "F", "", "", 1);
	addQuestion("In order to respond to a text, you should look for the information you find important.", "T", "F", "", "", 1);
	addQuestion("Readers should not bother making annotations on information they agree with.", "T", "F", "", "", 2);
	addQuestion("You should write down questions about a text to ask in class.", "T", "F", "", "", 1);
	addQuestion("Only use a highlighter when annotating.", "T", "F", "", "", 2);
	addQuestion("Sometimes it is helpful to draw while annotating.", "T", "F", "", "", 1);
	
	//----------------------------------------------------------
	display();
}