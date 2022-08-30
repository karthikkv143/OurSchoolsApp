const { default: allureReporter } = require('@wdio/allure-reporter');

class ContactNewsPage  {
    
    static november = 'November 2021';

    
     get dispalyNov () {
        return $('//h2[text()="November 2021"]');
    }

    async displayContactGroup(){
        const displayNovember2021 = await this.dispalyNov;
        await displayNovember2021.waitUntil(async function(){
            return (await this.getText()==ContactNewsPage.november)
        },{
          timeout:20000,
          timeoutMsg:"Text was not matched"  
        })

        await displayNovember2021.scrollIntoView()
        allureReporter.addStep("User scroled till "+ContactNewsPage.november)
    }
}


module.exports = new ContactNewsPage();
