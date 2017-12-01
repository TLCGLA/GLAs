function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz3.html";
	curQuiz=3;
	curQuizRedirect=19;
	
	// TODO
	addQuestion("Identify the problem with each thesis statement.<br>In my opinion, high schools should offer more than abstinence-only sex education; they should advise students on various birth control and disease prevention techniques.", "Fragment", "Personal opinion phrase", "Muddled language", "Statement of fact", 2);
	addQuestion("Identify the problem with each thesis statement.<br>Should people who apply for welfare benefits be required to pass a drug test?", "Not a statement", "Overly figurative language", "Announces a topic", "Contains elements that aren't related", 1);
	addQuestion("Identify the problem with each thesis statement.<br>This paper will explore the effects of the Occupy Wall Street movement.", "Personal opinion phrase", "Fragment", "Contains elements that aren't related", "Announces a topic", 4);
	addQuestion("Identify the problem with each thesis statement.<br>Alternative medicines like acupuncture provide many important benefits to patients.", "Vague", "Muddled language", "Fragment", "Statement of fact", 1);
	addQuestion("Identify the problem with each thesis statement.<br>Asking a public school to provide character education to students opens up a Pandora's Box of problems.", "Question", "Announces topic", "Personal opinion phrase", "Overly figurative language", 4);
	
	
	//----------------------------------------------------------
	display();
}