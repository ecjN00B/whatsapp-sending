module.exports = (application) => {
    
    application.get('/browser/new', (req, res) => {
        application.app.controllers.browser.newBrowser(application, req, res); 
    });

    application.get('/browser/login', (req, res) => {
        (async () => {
            page = await application.app.controllers.browser.page;
            await application.app.controllers.whatsapp.login(page, res);
        })();
    });

}