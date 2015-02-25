function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	
	addQuestion("Why should students pre-read?", "It will help them make connections to what they already know.", "It will help them get their bearings in the text.", "It will help them determine their purpose for reading.", "All of the above.", 4);
	addQuestion("What is intrinsic motivation?", "A person wants to learn a subject because s/he needs to pass the class for her/his major.", "A person wants to learn a subject because s/he values the information.", "A person wants to learn a subject because s/he will lose her/his financial aid if s/he fails.", "None of the above.", 2);
	addQuestion("How can you motivate yourself to read?", "Think about how the topic affects you personally.", "Think about all the other things you'd rather be doing.", "Consider ways the material will help you in your career.", "1 and 3.", 4);
	addQuestion("How do students fall into the reading coma?", "They drift off while reading.", "They are in a productive environment.", "They are intrinsically motivated to read.", "None of the above.", 1);
	addQuestion("The most effective reading environment is one where students _______", "Are not distracted", "Are focused on a single task", "Are in a comfortable seated position", "All of the above", 4);
	
	//----------------------------------------------------------
	display();
}