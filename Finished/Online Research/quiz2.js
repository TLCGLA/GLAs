function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=13;
	
	addQuestion("Which search will give you fewer results?", "Animal rights OR vegetarianism", "Animal rights AND vegetarianism", "", "", 2);
	addQuestion("You are completing a research project on male body image, and you notice that some articles discuss steroid use.  However, you want to focus specifically on anorexia.  Which of the following is the best use of Boolean operators for this project?", "Body image", "Male body image or anorexia", "(Male body image or anorexia) and steroids", "Male body image and anorexia not steroids", 4);
	addQuestion("You are completing a research project on discrimination.  You want to search all versions of the term \"discrimination\" (discriminate, discriminating, etc.) in one search.  Which of the following searches will work for you?", "Discriminat$", "Discriminat*", "Discriminat!", "Discriminate and discrimination and discriminating", 2);
	addQuestion("Your search on breast cancer returned over 80,000 results.  How can you narrow those results?", "Select only full text articles", "Select peer reviewed articles", "Specify a date range", "All of the above", 4);
	
	
	addQuestion("You are now going to practice going to the library webpage and accessing the research databases.<br>First, go to the library at this site: <a href='http://www.canyons.edu/offices/library/' target='_blank'>http://www.canyons.edu/offices/library/</a>. A new window will open. You will have to go back and forth between the two windows to complete this activity.<br>Second, on the library webpage you just opened, find the button called \"Find articles\" on the top button bar. Click on it to open the list of databases available in the library.<br>Third, answer the multiple choice questions below using the information contained on the online databases.<br><br>You have been assigned a paper on Post-Traumatic Stress Disorder (PTSD) in psychology class, but you don't know much about the topic.  Which database should you use to begin your research?", "Academic Search Premier", "Business Source Elite", "ERIC", "RAND California", 1);
	addQuestion("Which of the following is a general database (not focused on one specific subject)?", "ARTstor", "Consumer Health Complete", "Encyclopedia of Management", "ProQuest", 4);
	addQuestion("If you were writing a paper on Prohibition for an American History class, which database would be the most helpful?", "Biography in Context", "American Decades", "Issues & Controversies", "Military & Government Collection", 2);
	addQuestion("Your instructor has asked you to prepare a speech on a current debate in the United States.  Where might you find some good topic ideas?", "Issues and Controversies", "MEDLINE", "Psychology and Behavioral Sciences Collection", "Twayne's Authors Series", 1);
	
	
	
	
	//----------------------------------------------------------
	display();
}