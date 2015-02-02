ques = """Based on the below online news article, which in-text citation is formatted correctly? 
Authors: Andrew Jacobs and Ian Johnson
Title: \\"Pollution killed 7 Million People Worldwide in 2012, Report Finds\\"
Page number: no page numbers listed  
Quote: Breakneck urbanization in the developing nations of Asia, especially China, is a major force contributing to the air pollution problem.
1. Jacobs and Johnson state that \\"breakneck urbanization in the developing nations of Asia, especially China, is a major force contributing to the air pollution problem.\\"
2. In the article, \\"Pollution Killed 7 Million People Worldwide in 2012,\\" readers learn that breakneck urbanization in the developing nations of Asia, especially China, is a major force contributing to the air pollution problem.
3. A 2012 report explains that \\"breakneck urbanization in the developing nations of Asia, especially China, is a major force contributing to the air pollution problem\\" (Jacobs and Johnson).
4. Both 1 and 3 are correct
4"""

quesArr = ques.split("\n");

started=0
new=1
num=0

for i in xrange(0, len(quesArr)):
    if(new==1):
        res="addQuestion(\""
        new=0
    
    if(started==0):
        try:
            int(quesArr[i][0:1]) # catch if we hit the number
            started=1
            res+= "\", \"" + quesArr[i][3:] + "\""
            num+=1
        except ValueError:
            res+=quesArr[i] + "<br>"
    else:
        if(num != 4):
            res+= ", \"" + quesArr[i][3:] + "\""
            num+=1
        else:
            res+= ", " + quesArr[i]
            
res += ");"
print res