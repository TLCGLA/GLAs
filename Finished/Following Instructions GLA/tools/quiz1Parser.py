ques="""1. What does MLA stand for?
a. Modern literature association
b. Mobile language agency
c. Multicultural literature agency
d. Modern language association
4
2. Where can you find information to help use MLA formatting?
a. The learning center (TLC)
b. College of the canyons library
c. A handbook like rules for writers
d. All of the above
4
3. When formatting a document in MLA style, how wide should your margins be?
a. One inch on all four sides
b. 1 1/4 inches on all four sides
c. Whatever my computer is set to 
d. One inch on the top and bottom of the page; one and a half inches on the left and right sides
1
4. What information should appear in your header?
a. Your full name
b. Your last name only
c. The page number only
d. Your last name and the page number
4
5. Which of the following is the correct way to format a title?
a. TITLE
b. Title
c. <b>Title</b>
d. <u>Title</u>
2
6. You are writing about Citizen Kane, which is a film. How should you format the title in your essay?
a. \\"Citizen kane\\"
b. CITIZEN KANE
c. Citizen Kane
d. \\"<i>Citizen Kane</i>\\"
3
7. You are writing about The Red Wheelbarrow, which is a poem. How should you format the title in your essay?
a. \\"The Red Wheelbarrow\\"
b. <b>The Red Wheelbarrow</b>
c. The Red wheelbarrow
d. \\"<i>The Red Wheelbarrow</i>\\"
1
8. You are writing about an online article called Some Students Need to Fail. How should you format the title in your essay?
a. \\"Some Students Need to Fail\\"
b. <u>Some students need to fail</u>
c. <i>Some students need to fail</i>
d. <b>SOME STUDENTS NEED TO FAIL</b>
1"""

print ques

quesArr = ques.split("\n")

for i in xrange(0, len(quesArr), 6):
    res="addQuestion(\""+quesArr[i][3:]+"\""
    for j in xrange(1, 5):
        res+=", \"" + quesArr[i+j][3:] + "\""
    res+= ", " + quesArr[i+5]
    res+=");"
    print res
	
	
