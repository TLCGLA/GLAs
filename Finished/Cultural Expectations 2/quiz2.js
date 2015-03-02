function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=22;
	addQuestion("A hybrid class is taught entirely online.", "True", "False", "", "", 2);
	addQuestion("If you take an online class, you must log in to your course website on the first day of class.", "True", "False", "", "", 1);
	addQuestion("If you want to find out how a word is pronounced, you can use an online dictionary.", "True", "False", "", "", 1);
	addQuestion("You will only use an open source textbook if your instructor assigns one.", "True", "False", "", "", 2);
	addQuestion("You can access lectures from other universities through iTunes.", "True", "False", "", "", 1);
	addQuestion("U.S. public libraries allow people to check out books for free.", "True", "False", "", "", 1);
	addQuestion("There is only one museum in the Los Angeles area.", "True", "False", "", "", 2);
	addQuestion("Some internships are unpaid.", "True", "False", "", "", 1);
	
	
	//----------------------------------------------------------
	display();
}