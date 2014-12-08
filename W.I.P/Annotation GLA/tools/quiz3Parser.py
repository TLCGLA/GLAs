ques="""The below source is a work in an anthology. Which of the citations are correct?
Poem Title: Flame
Poem Author: Jayne Cortez
Anthology Title: The Oxford Anthology of African-American Poetry
Anthology Editor: Arnold Ramersad and Hilary Herbold
Page Numbers: 3
Medium: Print
Publisher: Oxford University Press
City: New York
Year: 2006

Ramersad, Arnold and Hilary Herbold, Eds. The Oxford Anthology of African American Poetry. \\"Flame\\" by Jayne Cortez, pg. 3. New York: Oxford University Press, 2006. Print.
Cortez, Jayne. \\"Flame.\\" The Oxford Anthology of African American Poetry. Eds. Arnold Ramersad and Hilary Herbold. New York: Oxford University Press, 2006. 3. Print.
Cortes, Jayne. \\"Flame.\\" New York: Oxford University Press, 2006. Print.
Ramersad,  Arnold and Hilary Herbold, Eds. The Oxford Anthology of African American Poetry. New York: Oxford University Press, 2006. Print.
2"""

quesArray = ques.split("\n")

answers=False
res="addQuestion(\""

for i in xrange(0, len(quesArray)):
    if(answers == False):
        if(quesArray[i] ==""):
            answers=True
            res+="\""
        else:
            res+=quesArray[i] + "<br>"
    else:
        if(i == len(quesArray)-1):
            res += ", " + quesArray[i]
        else:
            res += ", \"" + quesArray[i] + "\""
res += ");"
print res