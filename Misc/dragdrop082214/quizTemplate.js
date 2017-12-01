var quizAnswerKey = new Array();
var quizQuestions = new Array();
var quizAnswers = new Array();
var quests        = -1;
var curQuestionId = 0; // After questions are loaded, will have number of total questions
var correct = 0; // Questions answered correctly
var answered = 0; // Questions answered total
var curQuiz;

function display()
{
	// Display questions on page
	if(answered == 0 && getCookie("answered") != "")
	{
		answered = parseInt(getCookie("answered"));
	}
	if(correct == 0 && getCookie("correct") != "")
	{
		correct = parseInt(getCookie("correct"));
	}
	
	for(var i = 0; i < quizQuestions.length; ++i) // i = Question number
	{
		//prevents undefined data from being printed out!
		if(typeof quizQuestions[i] === "undefined")
		{
			break;
		}
	
		document.getElementById("quiz").innerHTML += "<div class=\"questionContainer\"><h3>" + quizQuestions[i] + "</h3>";
		
		for(var j = 0; j < quizAnswers[i].length; j++) // j = Answer number
		{
			var prefix = "";
			var postfix = "";
			document.getElementById("quiz").innerHTML += "<div id='d" + i + "," + j + "'>";
			
			// Loads questions already answered
			if(getCookie(i) != "")
			{
				if(parseInt(getCookie(i)) == j)
				{
					if(answered !== curQuestionId)
					{
						prefix = "<span class='selected'>";
						postfix = "</span>";
					}
					else
					{
						if(parseInt(getCookie(i)) == quizAnswerKey[i])
						{
							
							prefix = "<font color='green'>";
							postfix = "</font>";
						}
						else
						{
							prefix = "<font color='red'>";
							postfix = "</font>";
						}
					}
				}
			}
			
			if(quizAnswers[i][j] !== "") //fix for questions that have fewer than n answers
			{
			  document.getElementById("quiz").innerHTML += "<a href='javascript:void(0)' class='link' id='" + i + "," + j + "' onClick='answerQuestion(\"" + i + "," + j + "\")'>" + prefix + (j+1) + ") " + quizAnswers[i][j] + postfix + "</a>";
			  document.getElementById("quiz").innerHTML += "<br></div>";
			  document.getElementById("quiz").innerHTML += "</div>";//closes questionContainer div
			}
		}
	}
	
	// Check if the quiz is finished
		
	if(answered == curQuestionId)
	{
		document.getElementById("buttons").innerHTML = '<input type="button" value="Continue" onClick="quizFinished();" />';
		setCookie("submitted", 1, 1);
		//quizFinished();
	}
	else
	{
		document.getElementById("buttons").innerHTML = '<input type="button" id="sub" value="Submit Quiz" onClick="location.reload();" />';
	}
	debug();
}

function displayDraggable()
{
	//output draggable element containing answer to question
	// Display questions on page
	if(answered == 0 && getCookie("answered") != "")
	{
		answered = parseInt(getCookie("answered"));
	}
	if(correct == 0 && getCookie("correct") != "")
	{
		correct = parseInt(getCookie("correct"));
	}
	
	for(var i = 0; i < quizQuestions.length; ++i) // i = Question number
	{
		//prevents undefined data from being printed out!
		if(typeof quizQuestions[i] === "undefined")
		{
			break;
		}
	
		//document.getElementById("quiz").innerHTML += "<div class=\"questionContainer\"><h3>" + quizQuestions[i] + "</h3>";
		
		for(var j = 0; j < quizAnswers[i].length; j++) // j = Answer number
		{
			var prefix = "";
			var postfix = "";
			document.getElementById("quiz").innerHTML += "<div id='d" + i + "," + j + "'>";
			
			// Loads questions already answered
			if(getCookie(i) != "")
			{
				if(parseInt(getCookie(i)) == j)
				{
					if(answered !== curQuestionId)
					{
						prefix = "<span class='selected'>";
						postfix = "</span>";
					}
					else
					{
						if(parseInt(getCookie(i)) == quizAnswerKey[i])
						{
							$("#a" + j).removeClass("highlight");
							$("#a" + j).addClass("correct");
							prefix = "<font color='green'>";
							postfix = "</font>";
						}
						else
						{
							$("#a" + j).removeClass("highlight");
							$("#a" + j).addClass("incorrect");
							prefix = "<font color='red'>";
							postfix = "</font>";
						}
					}
				}
			}
			
			if(quizAnswers[i][j] !== "") //fix for questions that have fewer than n answers
			{
			  document.getElementById("quiz").innerHTML += "<div id='" + i + "," + j + "' class='draggable question'>" + quizAnswers[i][j] + postfix + "</div>";
			  document.getElementById("quiz").innerHTML += "<br></div>";
			  //document.getElementById("quiz").innerHTML += "</div>";//closes questionContainer div
			}
		}
		
	}
	
	//add enough droppable areas for the answers to go
	document.getElementById("quiz").innerHTML += "<div id=\"answerContainer\"></div>";
	
	if(quests != -1)
	{
		for(var i in quests)
		{
			var num = parseInt(i);
			document.getElementById("answerContainer").innerHTML += "<div class='row'>";
			//document.getElementById("answerContainer").innerHTML += "<div class='cell answerNum'>" + quests[num] + ": </div>";
			document.getElementById("answerContainer").innerHTML += "<div class='cell answerNum'>" + quizQuestions[num] + ": </div>";
			document.getElementById("answerContainer").innerHTML += "<div id='a" + i + "' class='column droppable answer'><p>Drop answer here.</p></div>";
			document.getElementById("answerContainer").innerHTML += "</div>";
		}
	}
	//make everything draggable/droppable
	makeDraggable();
	
	// Check if the quiz is finisheD
	if(answered == curQuestionId)
	{
		alert("Your quiz has been graded. Please click continue to see the results.");
		document.getElementById("buttons").innerHTML = '<input type="button" value="Continue" onClick="quizFinished();" />';
		setCookie("submitted", 1, 1);
		//quizFinished();
	}
	else
	{
		document.getElementById("buttons").innerHTML = '<input type="button" id="sub" value="Submit Quiz" onClick="location.reload();" />';
	}
	debug();
}//displayDraggable

function answerQuestion(answer)
{
	var a = answer.split(","); // Answers are determined by 'question,answer'.
	var question=a[0];
	var ans=parseInt(a[1]);
	
	if(Object.prototype.toString.call(quizAnswerKey[curQuestionId]) === "[object Array]")
	{
		//if the question has multiple answers 
	}
	
	if(getCookie(question) == "") // The question hasn't been answered yet
	{
		answered++;
		
		setCookie("answered", answered, 1);
		setCookie(question, ans, 1);
		
		//var inner = document.getElementById("" + question + "," + ans).innerHTML;
		
		checkAnswer(question, ans);
		
		// Check if we're at the end of the quiz
		if(answered == curQuestionId)
		{
			//quizFinished();
		}
	}
	else if(getCookie("submitted") == "")
	{
		var oldAnswer = getCookie(question);
		var inner = document.getElementById("" + question + "," + oldAnswer).innerHTML;
		
		if(oldAnswer !== ans)
		{
			setCookie(question, ans, 1);
			document.getElementById("" + question + "," + oldAnswer).innerHTML = inner.substr(23, inner.indexOf("</span>"));

			if(quizAnswerKey[question] == oldAnswer)
			{
				correct--;
			}
			checkAnswer(question, ans);
		}
	}
	
	debug();
}

function checkAnswer(question, ans)
{

	var inner = document.getElementById("" + question + "," + ans).innerHTML;
	
		if(quests !== -1)
		{	
			//determine which question is being answered
			var ansBox = "a" + question;
			
			//compare id of p to answer box
			var p = $("#a" + question).find("p").attr("id");
			var i = p.split(",");
			alert(ansBox + ", " + p + ", " + i[0] + " and " + i[1]);
			
			//set the cookie for whether or not it's correct!
			
			
		}
		
		if(quizAnswerKey[question] == ans) // Answer is correct
		{
			
			document.getElementById("" + question + "," + ans).innerHTML = "<span class='selected'>" + inner + "</span>";
			correct++;
			
			if(getCookie("correct") == "") // We haven't answered a question before, so we're at the beginning of the quiz
			{
				//setCookie
				setCookie("correct", correct, 1);
			}
			else
			{
				// update cookie
				setCookie("correct", correct, 1);				
			}
		} 
		else // Answer is incorrect
		{
			document.getElementById("" + question + "," + ans).innerHTML = "<span class='selected'>" + inner + "</span>";
			//document.getElementById("" + question + "," + ans).innerHTML += "&nbsp<font color='red'>X</font>";
		}

}

// Called when the quiz is finished
function quizFinished()
{	
	
	if(correct != curQuestionId) // They didn't get all the questions right
	{
		// Tell them they didn't get them all right, then redirect
		// Do this in a better way, probably with JQuery fade in or something
		clearCookie();
		alert("You didn't get all the questions right, going back to the beginning of this section.");
		
		deleteCookie("curSlide"); // Make sure they go back to the first slide.
		var newNum = 1;
		if(curQuiz == 1)
		{
			newNum = 1;
		}
		else if(curQuiz == 2)
		{
			newNum = 13;
		}
		else if(curQuiz == 3)
		{
			newNum = 20;
		}
		setCookie("curSlide", newNum);
		deleteCookie("cont" + curQuiz);
		window.location="GLA.html";
	}
	else // They got all the questions correct
	{
		setCookie("cont" + curQuiz, 1, 1);
		clearCookie();
		alert("Congratulations! You got all the questions right.");
		window.location="GLA.html";
	}
}
// Add to the arrays holding the questions and answers. All variables are strings except correctAnswer, which is an int.
function addQuestion(question, answer1, answer2, answer3, answer4, correctAnswer)
{
	// Currently set up for only 4 questions. Doubtful more would be needed, but if so rewrite for modularity
	quizQuestions[curQuestionId] = question;
	quizAnswers[curQuestionId] = [];
	quizAnswers[curQuestionId][0] = answer1;
	quizAnswers[curQuestionId][1] = answer2;
	quizAnswers[curQuestionId][2] = answer3;
	quizAnswers[curQuestionId][3] = answer4;
	quizAnswerKey[curQuestionId] = correctAnswer-1;
	curQuestionId++; // Keep track of the total number of questions
}

//Add question with with n answers
function addQuestions(info, isDraggable)
{
	if(isDraggable)
	{
		quests = new Array();
	}
	for(var x in info)
	{
	
		if(typeof info[x] === "undefined")
		{
			break;
		}
	
		//store question into question array
		quizQuestions[curQuestionId] = info[x].question;
		
		//put answers into quizAnswers arrays
		//creates new array if quizAnswers[curQuestionId] is undefined for some reason
		if(typeof quizAnswers[curQuestionId] === "undefined")
		{
			quizAnswers[curQuestionId] = new Array();
		}
		
		//store answers into array
		for(var i in info[x].answers)
		{
			quizAnswers[curQuestionId][i] = info[x].answers[i];
			//alert("info[" + x + "].answers[" + i + "] = " + info[x].answers[i]);
			if(isDraggable)
			{
				//generate questions for draggable question
				quests[info[x].correctAnswer-1] = info[x].question;
			}
		}
		
		//determine whether multiple answers are allowed, if so store answer in answer key as an array
		if(info[x].hasMultipleAnswers)
		{
			quizAnswerKey[curQuestionId] = new Array();
			for(var y in info[x].correctAnswer)
			{
				quizAnswerKey[curQuestionId][y] = info[x].correctAnswer[y]-1;
			}
		}
		else
		{
			//store quizAnswerKey
			quizAnswerKey[curQuestionId] = info[x].correctAnswer-1;
		}
		
		curQuestionId++;
	}
}

function showCookies()
{
	alert(document.cookie);
}

function clearCookie()
{
	deleteCookie("correct");
	deleteCookie("answered");
	deleteCookie("submitted");
	
	for(var i = 0; i < curQuestionId; ++i)
	{
		deleteCookie(""+i);
	}
//	window.location=curPage;
}

function clearQuiz()
{
	var clear = confirm("All of your progress will be lost! Are you sure you would like to continue?");
	
	if(clear)
	{
		clearCookie();
	}
}

function debug()
{
	//document.getElementById("test").innerHTML = correct + "/" + curQuestionId + "<br>";
	document.getElementById("test").innerHTML = "<strong>Questions answered: " + answered + "/" + curQuestionId + "</strong>";
}