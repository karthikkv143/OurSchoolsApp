
const allureReporter = require('@wdio/allure-reporter').default;

class SearchPage  {

    
   static contactGroup ='go to homepage for Contact Group 5th Floor,  Lyndon House 5862 Hagley Road,  Birmingham,  B16 8PE';
   static homePageTitle ='OurSchoolsApp';
   static welcomePageHeader='Welcome to OurSchoolsApp'
   static schoolName = 'B16 8PE'

    get inputUsername () {
        return $('#main');
    }

    get inputPassword () {
        return $('//li[@aria-label="go to homepage for Contact Group 5th Floor,  Lyndon House 5862 Hagley Road,  Birmingham,  B16 8PE"]');
    }

    get btnSubmit () {
        return $('#searchPostcodeButton');
    }
    get mainPageHeader(){
        return $('#root > h2')
    }

    
    async searchB168PE () {
        const  url = await browser.getUrl();
        assert.equal(url, browser.options.baseUrl)
        assert.equal(await (await this.mainPageHeader).getText(), SearchPage.welcomePageHeader)
        assert.equal(await browser.getTitle(), SearchPage.homePageTitle)
        
        await this.inputUsername.setValue(SearchPage.schoolName);
        allureReporter.addStep(SearchPage.schoolName+" value entered in input Search Box")

        await this.btnSubmit.click();
        allureReporter.addStep("User Clicked on 'Search Button'")
    }

    async selectContactGroup(){
        const scrollText = await this.inputPassword;
        await scrollText.waitUntil(async function(){
            return (await this.getAttribute("aria-label")==SearchPage.contactGroup)
        },{
          timeout:20000,
          timeoutMsg:"Text was not matched"  
        })
        await scrollText.scrollIntoView();
        await scrollText.waitForClickable({ timeout: 3000 });
        await scrollText.click();
        allureReporter.addStep('User clicked on Active Contact Group')
    }

    async launchURL() {
        allureReporter.addStep('When User launched OurSchool Application'+browser.options.baseUrl)
        await browser.url('');
    }
}

module.exports = new SearchPage();
