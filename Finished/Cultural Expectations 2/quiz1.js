function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	addQuestion("Professors expect you to take the initiative to visit office hours if you need help with the class.", "True", "False", "", "", 1);
	addQuestion("If you are struggling with an assignment, you should visit office hours fifteen minutes before the assignment is due.", "True", "False", "", "", 2);
	addQuestion("Students can go to the library for help learning APA format.", "True", "False", "", "", 1);
	addQuestion("The Learning Center (TLC) only provides tutoring in math.", "True", "False", "", "", 2);
	addQuestion("Associated Student Government meets with its members to help them choose a major.", "True", "False", "", "", 2);
	addQuestion("The Counseling Center sponsors blood drives.", "True", "False", "", "", 2);
	addQuestion("The Job and Career Center can help students prepare for a job interview.", "True", "False", "", "", 1);
	addQuestion("Students need health insurance to visit the health center.", "True", "False", "", "", 2);
	addQuestion("If COC doesn't have the club you want, you can start your own club.", "True", "False", "", "", 1);
	
	
	//----------------------------------------------------------
	display();
}