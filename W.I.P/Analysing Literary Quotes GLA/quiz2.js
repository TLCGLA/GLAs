function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	
	addQuestion("Summary", "A reader's initial emotional reaction to a quote.", "An examination of the function of a quote.", "Restating a quote in your own words to explain what it says.", "A close reading of a quote to determine what it means.", 3);
	addQuestion("Response", "A reader's initial emotional reaction to a quote.", "An examination of the function of a quote.", "Restating a quote in your own words to explain what it says.", "A close reading of a quote to determine what it means.", 1);
	addQuestion("Analysis", "A reader's initial emotional reaction to a quote.", "An examination of the function of a quote.", "Restating a quote in your own words to explain what it says.", "A close reading of a quote to determine what it means.", 4);
	addQuestion("Rhetorical Analysis", "A reader's initial emotional reaction to a quote.", "An examination of the function of a quote.", "Restating a quote in your own words to explain what it says.", "A close reading of a quote to determine what it means.", 2);
	
	//----------------------------------------------------------
	display();
}