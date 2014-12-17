function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	
	addQuestion("Students can use a handbook for help citing properly.", "T", "F", "", "", 1);
	addQuestion("When surveying a reading, students should read every word of the chapter from beginning to end.", "T", "F", "", "", 2);
	addQuestion("When surveying a reading, students should read the abstract or summary before reading the chapter.", "T", "F", "", "", 1);
	addQuestion("Pre-reading questions require students to think about what they already know about a topic.", "T", "F", "", "", 1);
	addQuestion("Pre-reading questions help students learn the definition for difficult vocabulary words.", "T", "F", "", "", 2);
	addQuestion("Students should avoid making predictions about a text because it will confuse them.", "T", "F", "", "", 2);
	addQuestion("Transition words like however and for example help students make predictions.", "T", "F", "", "", 1);
	
	//----------------------------------------------------------
	display();
}