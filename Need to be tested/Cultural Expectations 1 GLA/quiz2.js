function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=10;
	
	addQuestion("Professors in the United States will only lecture.", "True", "False", "", "", 2);
	addQuestion("Participating in class discussions may count towards your grade.", "True", "False", "", "", 1);
	addQuestion("In a class debate, it is acceptable to yell at another student.", "True", "False", "", "", 2);
	addQuestion("Only students who are in trouble go to a professor's office hours.", "True", "False", "", "", 2);
	addQuestion("Professors in the United States base your grade on how much they like you.", "True", "False", "", "", 2);
	addQuestion("It is your responsibility to make sure you understand all the comments a professor writes on your paper.", "True", "False", "", "", 1);
	addQuestion("It is your responsibility to keep track of your grades for the semester.", "True", "False", "", "", 1);
	addQuestion("If your final percentage is 79.99%, you will get a B in the class.", "True", "False", "", "", 2);	
	
	//----------------------------------------------------------
	display();
}