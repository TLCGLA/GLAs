function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	curQuizRedirect=20;
	
	addQuestion("Outlines can be used as study guides for exams.", "T", "F", "", "", 1);
	addQuestion("Outlines are organized lists.", "T", "F", "", "", 1);
	addQuestion("Outlines never have indentations.", "T", "F", "", "", 2);
	addQuestion("When outlining a textbook chapter, you can ignore the chapter title.", "T", "F", "", "", 2);
	addQuestion("Do not include vocabulary and definitions in an outline.", "T", "F", "", "", 2);
	addQuestion("Outlines should use parallel structure.", "T", "F", "", "", 1);
	
	//----------------------------------------------------------
	display();
}