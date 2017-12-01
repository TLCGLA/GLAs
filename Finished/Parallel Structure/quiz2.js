function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=14;
	inst = "Instructions:  Click on the word/phrase that completes the sentence using parallel structure.<br>";
	addQuestion(inst + "To pass this class, you must do your homework, take good notes, and...", "The tests", "Study for the tests", "Flashcards for the tests", "", 2);
	addQuestion(inst + "Carlos wanted an ice cream sundae with chopped peanuts, hot fudge, and...", "Covered in whipped cream", "Covering the whole thing with whipped cream", "Whipped cream", "", 3);
	addQuestion(inst + "For our trip to the beach, bring the following items:  sunscreen, towels, and...", "Watermelon slices", "Cut some watermelon slices", "Slicing the watermelon", "", 1);
	addQuestion(inst + "When Elena visits her family, she likes sleeping in, eating home-cooked meals, and...", "To talk with her sister", "Talking with her sister", "Talked with her sister", "", 2);
	addQuestion(inst + "These are the pool rules:  do not run, report unsafe behavior to the lifeguard, and...", "Did you bring your towel?", "Towel", "Bring your towel", "", 3);
	addQuestion(inst + "To have a healthy diet, you should eat lots of vegetables and...", "Avoid junk food", "No junk food", "Avoiding junk food", "", 1);
	addQuestion(inst + "I'm not sure whether I should cancel my trip or...", "Not", "Go alone", "Went alone", "", 2);
	addQuestion(inst + "I am either going walking in the park or", "Jogging at the gym", "To jog at the gym", "Jog at the gym", "", 1);
	addQuestion(inst + "It is less expensive to make your lunch at home than...", "Buy it at work", "To buy it at work", "Buying it at work", "", 2);
	addQuestion(inst + "Having a firm handshake is as important as...", "A friendly smile", "To have a friendly smile", "Having a friendly smile", "", 3);
	
	
	
	//----------------------------------------------------------
	display();
}