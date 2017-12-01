function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	
	addQuestion("COMPLETE the statements correctly by clicking on the answers.<br>A thesis statement is...", "the first paragraph of an essay.", "an introduction to the essay.", "a one or two sentence summary of the essay's argument.", "an illustration of the main point of the essay.", 3);
	addQuestion("COMPLETE the statements correctly by clicking on the answers.<br>The purpose of the thesis statement is to...", "introduce the pros and cons of the argument.", "define the objective of the essay.", "give an example of the topic discussed in the essay.", "describe the supporting research used in the essay.", 2);
	addQuestion("COMPLETE the statements correctly by clicking on the answers.<br>Without a strong thesis statement, your essay...", "may wander off topic.", "may lack sufficient supporting information.", "is incomplete.", "will not have an adequate introduction.", 1);
	addQuestion("COMPLETE the statements correctly by clicking on the answers.<br>To generate a thesis statement you should...", "come up with as many ideas as possible.", "ask your professor for possible topics.", "turn the assignment into a question.", "write a draft of your essay.", 3);
	
	addQuestion("Click on the most effective thesis statement for each topic.<br>Topic 1:  Organic Food", "Is it possible to grow organic food on a large scale?", "There are many issues that arise when growing organic food.", "More large agricultural businesses should grow their food organically to lessen their impact on the environment.", "", 3);
	addQuestion("Click on the most effective thesis statement for each topic.<br>Topic 2:  Single-Sex Education", "Schools should offer the option of single-sex education to help eliminate gender stereotypes that prevent students from excelling in particular subjects.", "Educators debate over whether or not girls and boys should be educated separately", "Education is a big issue in America today.", "", 1);
	addQuestion("Click on the most effective thesis statement for each topic.<br>Topic 3:  Environmental Impact of Water Bottles", "Many people carry disposable water bottles.", "Instead of using disposable water bottles, we should use reusable bottles to reduce our waste.", "The issues of using disposable water bottles will be discussed in this essay.", "", 2);
	
	
	
	//----------------------------------------------------------
	display();
}