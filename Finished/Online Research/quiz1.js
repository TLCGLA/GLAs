function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	
	addQuestion("Today, you can do much of your library research from home.", "True", "False", "", "", 1);
	addQuestion("For college research, websites are useless.  Go directly to library databases.", "True", "False", "", "", 2);
	addQuestion("Most Wikipedia pages are closed to the public and written only by experts with credentials.", "True", "False", "", "", 2);
	addQuestion("Although the College of the Canyons library provides helpful databases, they can only be accessed on campus.", "True", "False", "", "", 2);
	addQuestion("The College of the Canyons library has access to eBooks.", "True", "False", "", "", 1);
	addQuestion("All online databases are specific to a particular discipline (like health, psychology, etc.).", "True", "False", "", "", 2);
	addQuestion("Online databases are screened for reliability.", "True", "False", "", "", 1);
	addQuestion("The library databases can be accessed from any computer with internet access.", "True", "False", "", "", 1);
	
	
	//----------------------------------------------------------
	display();
}