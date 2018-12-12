const puppeteer = require('puppeteer');

module.exports = {
    newBrowser: async function(application, req, res){
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        module.exports.browser = browser;
        module.exports.page = page;

        res.send('Browser criado');
    }
}