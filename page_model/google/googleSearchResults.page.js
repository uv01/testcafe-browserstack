import { Selector, t, RequestLogger } from 'testcafe';
import requestLoggerUtilities from '../../utils/_requestLoggerUtilities.js'
const requestLoggerUtils = new requestLoggerUtilities()

class searchResults {
    constructor () {
        this.logoLinkToHome = Selector('#logo').withAttribute('title','Go to Google Home')
        this.logoImage = Selector('img').withAttribute('alt','Google')
    }

    async validateImgAndLink (widget) {
        await t
        .expect(this.logoLinkToHome.exists).ok()
        .expect(this.logoLinkToHome.visible).eql(true)
        .expect(this.logoImage.exists).ok()
        .expect(this.logoImage.visible).eql(true)
    }
}

export default new searchResults();