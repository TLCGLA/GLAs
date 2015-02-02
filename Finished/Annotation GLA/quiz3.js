function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	curQuizRedirect=20;
	
	addQuestion("Outlines can be used as study guides for exams.", "True", "False", "", "", 1);
	addQuestion("Outlines are organized lists.", "True", "False", "", "", 1);
	addQuestion("Outlines never have indentations.", "True", "False", "", "", 2);
	addQuestion("When outlining a textbook chapter, you can ignore the chapter title.", "True", "False", "", "", 2);
	addQuestion("Do not include vocabulary and definitions in an outline.", "True", "False", "", "", 2);
	addQuestion("Outlines should use parallel structure.", "True", "False", "", "", 1);
	
	//----------------------------------------------------------
	display();
}