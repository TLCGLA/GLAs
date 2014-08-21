function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	
	addQuestion("What does MLA stand for?", "Modern literature association", "Mobile language agency", "Multicultural literature agency", "Modern language association", 4);
	addQuestion("Where can you find information to help use MLA formatting?", "The learning center (TLC)", "College of the canyons library", "A handbook like rules for writers", "All of the above", 4);
	addQuestion("When formatting a document in MLA style, how wide should your margins be?", "One inch on all four sides", "1 1/4 inches on all four sides", "Whatever my computer is set to ", "One inch on the top and bottom of the page; one and a half inches on the left and right sides", 1);
	addQuestion("What information should appear in your header?", "Your full name", "Your last name only", "The page number only", "Your last name and the page number", 4);
	addQuestion("Which of the following is the correct way to format a title?", "TITLE", "Title", "<b>Title</b>", "<u>Title</u>", 2);
	addQuestion("You are writing about Citizen Kane, which is a film. How should you format the title in your essay?", "\"Citizen kane\"", "CITIZEN KANE", "<i>Citizen Kane</i>", "\"<i>Citizen Kane</i>\"", 3);
	addQuestion("You are writing about The Red Wheelbarrow, which is a poem. How should you format the title in your essay?", "\"The Red Wheelbarrow\"", "<b>The Red Wheelbarrow</b>", "The Red wheelbarrow", "\"<i>The Red Wheelbarrow</i>\"", 1);
	addQuestion("You are writing about an online article called Some Students Need to Fail. How should you format the title in your essay?", "\"Some Students Need to Fail\"", "<u>Some students need to fail</u>", "<i>Some students need to fail</i>", "<b>SOME STUDENTS NEED TO FAIL</b>", 1);

	//----------------------------------------------------------
	display();
}