function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	curQuizRedirect=13;
	
	addQuestion("Instead of eating the same breakfast every morning, Jim prefers to vary his choices.<br>Vary means:", "Change", "Keep", "Skip", "", 1);
	addQuestion("Maria sips her drink delicately; in contrast, her brother guzzles his drink.<br>Guzzle means:", "Steal", "Take big swallows of a drink", "Pour", "", 2);
	addQuestion("Charlie was jealous of Lucy's permissive parents.  His parents were so strict that they never let him do anything!<br>Permissive means:", "Uncaring", "Busy", "Allowing people to do what they want", "", 3);
	addQuestion("Judith went to the mall with $200.  She spent all the money on clothes.  When her mother asked her why she spent so much, Judith justified her decision.  She said that she needed a suit for a job interview and a dress for her friend’s wedding.<br>Justify means:", "Cry", "Buy", "Explain with reasons", "", 3);
	addQuestion("When Kelly returned from vacation, she discovered that her kitchen smelled awful.  She had forgotten to take out the trash before she left.  In order to eliminate the smell from the kitchen, she opened all the windows and bought an air freshener.<br>Eliminate means:", "Get rid of", "Take the trash out", "Hate", "", 1);
	addQuestion("During the game, the crowd became boisterous.  They did not sit quietly and peacefully like we thought they would.<br>Boisterous means:", "Noisy", "Quiet", "Calm", "", 1);
	
	//----------------------------------------------------------
	display();
}