import googleSearchHome from '../../page_model/google/googleSearchHome.page'
import googleSeachResults from '../../page_model/google/googleSearchResults.page'

fixture `Comments validation`
    .page `https://www.google.com/`
        test
        .meta({browser: 'all', device:'all'})
        ('Google Search', async t => {
            await googleSearchHome.search('google')
            await googleSeachResults.validateImgAndLink()
        });