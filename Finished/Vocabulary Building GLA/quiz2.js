function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=6;
	addQuestion("The people of the town were asked to avoid burglaries by acting cautiously.  The newspapers and T.V. news announced that thefts can be avoided if people follow common rules such as locking the house when leaving and going to bed at night.<br>Burglary means:", "Stealing from a house", "Breaking the windows of a house", "Repairing a house", "", 1);
	addQuestion("My sister ran out of chocolate chips while baking cookies. She substituted, or replaced, them with raisins and walnuts.<br>Substitute means:", "Buy", "Bake", "Replace with something else", "", 3);
	addQuestion("Mrs. Green enjoys her retired life.  She has completely given herself to her long-lost avocations.  For example, she now spends most of her time gardening, painting, and writing poetry.<br>Avocation means:", "Responsibilities", "Hobbies", "Chores", "", 2);
	addQuestion("I have arachnophobia.  As a result, I am scared of any type of spider, even the smallest, most harmless ones.<br>Arachnophobia means:", "Fear of animals", "Fear of spiders", "Fear of the dark", "", 2);
	addQuestion("On Mrs. Joyce's 80th birthday, her children and grandchildren bestowed all kinds of gifts and compliments on her.  She received a vacation ticket to Hawaii and two gift cards to her favorite spa.  She was also complimented on her beauty and wit.<br>Bestow means:", "Accept", "Take away", "Give", "", 3);
	



	//----------------------------------------------------------
	display();
}