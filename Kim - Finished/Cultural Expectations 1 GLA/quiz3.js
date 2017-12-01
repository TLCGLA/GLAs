function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	curQuizRedirect=20;
	
	addQuestion("Most professors in the United States expect you to speak in class.", "True", "False", "", "", 1);
	addQuestion("It's acceptable to shout out answers in class.", "True", "False", "", "", 2);
	addQuestion("You should always work with your best friend on team projects for class.", "True", "False", "", "", 2);
	addQuestion("Students can discuss personal emergencies with professors during office hours.", "True", "False", "", "", 1);
	addQuestion("For math tutoring, students should meet with a counselor.", "True", "False", "", "", 2);
	addQuestion("To access an e-book, students should use the Library's website.", "True", "False", "", "", 1);
	addQuestion("Students cannot print for free anywhere on campus.", "True", "False", "", "", 2);
	addQuestion("Academic counseling only occurs in the counseling office.", "True", "False", "", "", 2);
	addQuestion("Disabled Students Programs and Services (DSPS) can provide a sign language interpreter for students who are deaf or hard-of-hearing.", "True", "False", "", "", 1);
	addQuestion("The Student Health and Wellness Center provides mental health services.", "True", "False", "", "", 1);
	
	
	//----------------------------------------------------------
	display();
}