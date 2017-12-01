function loadPage()
{
	// addQuestion(Question, Answer1, Answer2, Answer3, Answer4, CorrectAnswer [not 0-indexed])
	curPage = "quiz2.html";
	curQuiz = 2;
	curQuizRedirect=10;
	
	addQuestion("Identify unifying claims by clicking on them.<br> Although helicopter parents mean well and try to do their best for their children, their hovering techniques prevent their children from maturing, which can hinder the children’s performance in college or the workplace.", "parents mean well and try to do their best", "their hovering techniques prevent their children from maturing", "performance in college or the workplace.", "which can hinder the children’s performance", 2);
	addQuestion("Identify unifying claims by clicking on them.<br>Psychiatrists rely too heavily on prescription drugs when treating patients; these drugs may cause addiction or other harmful side effects, especially if they are prescribed to children.", "Psychiatrists rely too heavily on prescription drugs when treating patients", "especially if they are prescribed to children.", "addiction or other harmful side effects", "", 1);
	addQuestion("Identify unifying claims by clicking on them.<br>While internet ads are distracting and irritating, users should be willing to tolerate ads as they allow websites to provide content and services for free.", "While internet ads are distracting and irritating", "provide content and services", "users should be willing to tolerate ads", "as they allow websites", 3);
	addQuestion("Identify unifying claims by clicking on them.<br>Sports teams that use Native American mascots should change those mascots; the current mascots perpetuate stereotypes that continue to harm the Native American community.", "the current mascots perpetuate stereotypes", "continue to harm the Native American community", "Sports teams that use Native American mascots should change those mascots", "", 3);
	addQuestion("Identify unifying claims by clicking on them.<br>Although Sports Utility Vehicles (SUVs) tend to have poor gas mileage, they provide important benefits that are important to consumers, including safety features and size, making them a family-friendly vehicle.", "tend to have poor gas mileage, they provide", "safety features and size, making them a family-friendly vehicle", "they provide important benefits that are important to consumers", "", 3);
	
	
	//----------------------------------------------------------
	display();
}