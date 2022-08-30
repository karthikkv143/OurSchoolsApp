const SchoolSearch = require('../pageObjects/schoolSearch.page');
const SecurePage = require('../pageobjects/contactNews.page');

describe('Ourschools application', () => {
    it('User should launch OurSchools Application', async () => {
        await SchoolSearch.launchURL()
        await SchoolSearch.searchB168PE();
        await SchoolSearch.selectContactGroup();
        await SecurePage.displayContactGroup();
    });
})
