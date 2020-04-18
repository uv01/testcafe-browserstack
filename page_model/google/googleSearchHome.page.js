import { Selector, t, RequestLogger } from 'testcafe';
import requestLoggerUtilities from '../../utils/_requestLoggerUtilities.js'
const requestLoggerUtils = new requestLoggerUtilities()

class googleSeachHome {
    constructor () {
        this.googleSearchBox = Selector('input').withAttribute('name','q')
        this.searchButton = Selector('input').withAttribute('name','btnK')
    }

    async search (text) {
        await t
            .typeText(this.googleSearchBox, text)
            .click(this.searchButton)
    }
}

export default new googleSeachHome();