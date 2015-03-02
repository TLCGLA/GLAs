function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	curQuizRedirect=27;
	inst = "Instructions:  Proofread the below sentences. Then, click on the word/phrase that does NOT fit parallel structure.<br>";
	addQuestion(inst + "On Friday night, Pablo had to decide whether to go to the football game, stay home and study, or taking his brothers to the movies.", "had to decide whether", "taking his brothers to the movies", "On Friday night", "", 2);
	addQuestion(inst + "After graduating college, Carolina wanted to take a trip to Europe, found a job quickly, and move to a new apartment.", "Carolina wanted to take a trip to Europe", "found a job quickly", "move to a new apartment", "", 2);
	addQuestion(inst + "Andrea and her sisters like playing volleyball, to go to the beach, and knitting.", "to go to the beach", "knitting", "Andrea and her sisters", "", 1);
	addQuestion(inst + "Trevor received a gift card to a shoe store for his birthday.  He plans to buy new running shoes, matching shoelaces, and to replace his socks.", "new running shoes", "matching shoelaces", "to replace his socks", "", 3);
	addQuestion(inst + "Mario made his famous guacamole for the party.  He smashes the avocado, chopped tomatoes and jalapenos, and seasoned it with lemon and salt.", "smashes the avocado", "his famous guacamole ", "lemon and salt", "", 1);
	
	
	
	//----------------------------------------------------------
	display();
}