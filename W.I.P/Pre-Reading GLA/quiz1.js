function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	
	addQuestion("Which of the following is NOT a good reason to include a quote in your paper?", "To support your claims", "To explain key terms", "To provide background information", "To take up space", 4);
	addQuestion("True or false:  Every statement you make should be supported by a quote.", "True", "False", "", "", 2);
	addQuestion("True or false:  It is possible to include too many quotes in a paper.", "True", "False", "", "", 1);
	addQuestion("True or false:  Quoting is the only way to discuss an author's writing.", "True", "False", "", "", 2);
	
	//----------------------------------------------------------
	display();
}