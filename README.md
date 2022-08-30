# OurSchoolsApp
OurSchoolsApp QA ENV Issue


Issue Description : After Launching this URL https://osa-web.t-cg.co.uk/qatest getting  below Error message in application.

Error Message :	This area should work the same as: /news but it currently fails. Investigate and find out what is failing. Write a test to cover the failure,which will pass once fixed.	
	
Issue Reason: I Think issue with calling  /news API , After clicking on NEWS TAB on Application we are calling QA ENV =https://pro-fapi-osa.t-cg.co.uk/api/schools/organisationId/news?markAsRead=false 
API , IN this API we are not pasing organisationId in URL and also i saw Request Method is OPTIONS But it should be GET Method.
So that is the reason status code also getting 404

Steps To Investigate Issue

Step 1:Open https://osa-web.t-cg.co.uk/qatest in URL, Than Go to Chrome Dev Tools and Select Network TAB.
Step 2:Click on https://pro-fapi-osa.t-cg.co.uk/api/schools/organisationId/news?markAsRead=false API 
			1) we are able to see this API status code is 404 .
			2) In URL also we are not passing organisationId .
			3) I saw Request Method is OPTIONS But it should be GET Method

QA ENV =https://pro-fapi-osa.t-cg.co.uk/api/schools/organisationId/news?markAsRead=false   == Status Code : 404 
Prod Env=https://pro-fapi-osa.t-cg.co.uk/api/schools/4055/news?markAsRead=false

I Did  above investigation in NetworkTabs, I think this may be the reason for failling to load application  QA Env .

## Aftre Downloading project from Repo open Command Prompt and enter below command to run the sctipt
npm install ==> to install the nodemodules
npm run ourSchoolApp  ==> to run the scripts

