function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	
	addQuestion("Tracy is cunning, selfish and dishonest. During the last test, she tried to <b>manipulate</b> the teacher to believe that she needed to keep her smart phone turned on because she was expecting an emergency text message. The <b>manipulation</b>, however, did not work because the teacher guessed that she was just being <b>manipulative</b>.<br>Manipulative means:", "Influence", "Talk", "Beg", "", 1);
	addQuestion("David serves his company in a small but vital way. He cleans the rooms, dusts the computers, and brings coffee for everyone by walking over to the nearby Starbucks. However, he is at the bottom of the company <b>hierarchy</b>. Every other employee is higher than David in the <b>hierarchy</b> of the company.<br>Hierarchy means:", "Manager of a company", "A system that gives some people more power and influence than others", "A group of employees", "", 2);
	

	//----------------------------------------------------------
	display();
}