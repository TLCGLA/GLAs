function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	//addQuestion("What does MLA stand for?", "Modern literature association", "Mobile language agency", "Multicultural literature agency", "Modern language association", 4);
	addQuestion("Everyone in a college classroom is about the same age (18-20).", "True", "False", "", "", 2);
	addQuestion("Everyone in a college classroom is at about the same learning level.", "True", "False", "", "", 1);
	addQuestion("To earn a C in a 3 unit class, you should plan to study for six hours a week outside of class.", "True", "False", "", "", 1);
	addQuestion("The syllabus will include the grading policy for the class.", "True", "False", "", "", 1);
	addQuestion("Students only need to read the syllabus one time at the beginning of the semester.", "True", "False", "", "", 2);
	addQuestion("American colleges don't really care about plagiarism; citing sources is not required.", "True", "False", "", "", 2);
	
	
	//----------------------------------------------------------
	display();
}