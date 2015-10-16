<%

On Error Resume Next
Session("FP_OldCodePage") = Session.CodePage
Session("FP_OldLCID") = Session.LCID
Session.CodePage = 1252
Session.LCID = 1033
Err.Clear

strErrorUrl = ""

If Request.ServerVariables("REQUEST_METHOD") = "POST" Then
If Request.Form("VTI-GROUP") = "0" Then
	Err.Clear

	Set fp_conn =  Server.CreateObject("ADODB.Connection")
	FP_DumpError strErrorUrl, "Cannot create connection"

	Set fp_rs = Server.CreateObject("ADODB.Recordset")
	FP_DumpError strErrorUrl, "Cannot create record set"

	fp_conn.Open Application("new_page_1_ConnectionString")
	FP_DumpError strErrorUrl, "Cannot open database"

	fp_rs.Open "Results", fp_conn, 1, 3, 2 ' adOpenKeySet, adLockOptimistic, adCmdTable
	FP_DumpError strErrorUrl, "Cannot open record set"

	fp_rs.AddNew
	FP_DumpError strErrorUrl, "Cannot add new record set to the database"
	Dim arFormFields0(2)
	Dim arFormDBFields0(2)
	Dim arFormValues0(2)

	arFormFields0(0) = "T2"
	arFormDBFields0(0) = "T2"
	arFormValues0(0) = Request("T2")
	arFormFields0(1) = "T1"
	arFormDBFields0(1) = "T1"
	arFormValues0(1) = Request("T1")

	FP_SaveFormFields fp_rs, arFormFields0, arFormDBFields0

	If Request.ServerVariables("REMOTE_HOST") <> "" Then
		FP_SaveFieldToDB fp_rs, Request.ServerVariables("REMOTE_HOST"), "Remote_computer_name"
	End If
	If Request.ServerVariables("HTTP_USER_AGENT") <> "" Then
		FP_SaveFieldToDB fp_rs, Request.ServerVariables("HTTP_USER_AGENT"), "Browser_type"
	End If
	FP_SaveFieldToDB fp_rs, Now, "Timestamp"
	If Request.ServerVariables("REMOTE_USER") <> "" Then
		FP_SaveFieldToDB fp_rs, Request.ServerVariables("REMOTE_USER"), "User_name"
	End If

	fp_rs.Update
	FP_DumpError strErrorUrl, "Cannot update the database"

	fp_rs.Close
	fp_conn.Close

	FP_FormConfirmation "text/html; charset=windows-1252",_
						"Form Confirmation",_
						"Thank you for submitting the following information:",_
						"test2.asp",_
						"Return to the form."

End If
End If

Session.CodePage = Session("FP_OldCodePage")
Session.LCID = Session("FP_OldLCID")

%>
<html>

<head>
<meta http-equiv="Content-Language" content="en-us">
<meta name="GENERATOR" content="Microsoft FrontPage 5.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>Name</title>
</head>

<body>

<form method="POST" action="test2.asp" webbot-action="--WEBBOT-SELF--">
  <!--webbot bot="SaveDatabase" SuggestedExt="asp" S-DataConnection="new_page_1" S-RecordSource="Results" U-Database-URL="fpdb/new_page_1.mdb" S-Builtin-Fields="REMOTE_HOST HTTP_USER_AGENT Timestamp REMOTE_USER" S-Builtin-DBFields="Remote_computer_name Browser_type Timestamp User_name" S-Form-Fields="T2 T1" S-Form-DBFields="T2 T1" startspan U-ASP-Include-Url="_fpclass/fpdbform.inc" --><input TYPE="hidden" NAME="VTI-GROUP" VALUE="0"><!--#include file="_fpclass/fpdbform.inc"--><!--webbot bot="SaveDatabase" endspan i-checksum="40548" --><p>
  Name: <input type="text" name="T1" size="20"></p>
  <p>Phone: <input type="text" name="T2" size="20"></p>
  <p><input type="submit" value="Submit" name="B1"><input type="reset" value="Reset" name="B2"></p>
</form>

</body>

</html>