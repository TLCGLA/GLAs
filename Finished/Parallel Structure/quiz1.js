function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	inst="Instructions:  Click on the word/phrase that does NOT fit the parallel structure.<br>";
	addQuestion(inst + "For lunch today, I packed a sandwich, an apple, and sliced some cucumber.", "sliced some cucumber", "For lunch today", "I packed a sandwich", "", 1);
	addQuestion(inst + "People who take yoga regularly are flexible, know how to meditate, and relaxed.", "regularly are flexible", "know how to meditate", "People who take", "", 2);
	addQuestion(inst + "Stress can cause people to lose their appetite, sleep badly, and short-tempered.", "Stress can cause people", "short-tempered", "lose their appetite", "", 2);
	addQuestion(inst + "Lucia needs a laptop with wifi, a word processing program, and that can play music loudly.", "that can play music loudly", "Lucia needs a laptop", "a word processing program", "", 1);
	addQuestion(inst + "The athlete trained using an intense program, frequently, and strenuously.", "The athlete", "strenuously", "using an intense program", "", 3);
	addQuestion(inst + "On their first date, Joe and Joannie went for a walk, dancing, and for coffee.", "Joe and Joannie", "dancing", "for coffee", "", 2);
	addQuestion(inst + "After you turn on the car, you should check your mirrors, buckle your seatbelt, and to release the parking break.", "to release the parking break", "After you turn on your car", "buckle your seatbelt", "", 1);
	addQuestion(inst + "The cops at the crime scene were frustrated because the fingerprints were smudged, the uncooperative witness, and the murder weapon was missing.", "were frustrated", "the murder weapon was missing", "the uncooperative witness", "", 3);
	
	
	//----------------------------------------------------------
	display();
}