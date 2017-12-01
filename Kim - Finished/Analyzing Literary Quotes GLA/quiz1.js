function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz1.html";
	curQuiz=1;
	curQuizRedirect=1;
	
	addQuestion("Select the quote that best shows Huck Finn's moral growth in Adventures of Huckleberry Finn by Mark Twain.", "The notice at the beginning of the novel:  \"Persons attempting to find a motive in this narrative will be prosecuted; persons attempting to find a moral in it will be banished; persons attempting to find a plot in it will be shot\" (264).", "When deciding not to turn in Jim, the runaway slave:  \"All right, then, I'll go to hell\" (399).", "When the duke dresses Jim up like King Lear: \"It was a long, curtain-calico gown, and a white horse-hair wig and whiskers; and then he took his theatre-paint and painted Jim's face and hands and ears and neck all over a dead dull solid blue, like a man that's been drownded nine days.  Blamed if he warn't the horriblest looking outrage I ever see\" (364).", "When playing a prank on Aunt Sally with his friend, Tom Sawyer:  \"So we had the odd spoon; and dropped it in her apron picket whilst she was giving us our sailing-orders\" (425).", 2);
	addQuestion("Select the quote that best shows the speaker's concerns about the function of walls in Robert Frost's poem \"Mending Wall.\"", "\"I let my neighbor know beyond the hill; / And on a day we meet to walk the line / And set the wall between us once again\" (12-14).", "\"He [the neighbor] only says, 'Good fences make good neighbors'\" (27).", "\"Before I built a wall I'd ask to know / What I was walling in or walling out, / And to whom I was like to give offense\" (32-34).", "\"I see him there, / Bringing a stone grasped firmly by the top / In each hand, like an old-stone savage armed\" (38-40).", 3);
	addQuestion("Select the quote that best shows the husband's control over his wife in Charlotte Perkins Gillman's The Yellow Wall-Paper.", "\"He [the husband John] is very careful and loving, and hardly lets me stir without special direction\" (668).", "\"There comes John's sister.  Such a dear girl she is, and so careful of me!\"  (670).", "\"I thought it was a good time to talk, so I told him [the husband John] that I really was not gaining here, and that I wished he would take me away\" (673).", "\"There is a very funny mark on this wall, low down, near the mopboard.  A streak that runs around the room.  It goes behind every piece of furniture, except the bed, a long straight, even smooch, as if it had been rubbed over and over\" (675).", 1);
	
	
	//----------------------------------------------------------
	display();
}