function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	
	addQuestion("Click on the types of works that should have an italicized title.", "Short Stories, Long Poem, Book Title, Film", "Musical Album, Long Poem, Book Title, Film", "Musical Album, Short Poem, Episode of a Television Show, Book Title", "Short Stories, Musical Album, Episode of a Television Show, Book Title", 2);
	addQuestion("Click on the correct in-text citation for a long poem.", "4.6.56-57", "(4.6.56-57)", "IV.6.56-57", "(lines 56-57)", 2);	
	addQuestion("Click on the correct in-text citation for the first time a writer quotes from a short poem.", "9-10", "(lines ix-x)", "(9-10)", "(lines 9-10)", 4);
	addQuestion("How many lines of poetry will you quote if you are using a block quote?", "2 lines", "3 lines", "4 lines", "5 lines", 2);
	addQuestion("What are your alternatives to using block quotes?", "Summarizing the passage", "Quoting only key words or phrases", "Use a long quote but don't format it in a block", "1 and 2", 4);
	addQuestion("Click on the correct in-text citation for a verse play.", "(lines 50-52)", "(2.1.50-52)", "(II.i.50-52)", "(pg. 12)", 2);
	addQuestion("Click on the correct citation for prose plays.", "(64)", "(pg. 64)", "(2.1.64)", "(lines 64-63)", 1);
	
	//----------------------------------------------------------
	display();
}