module.exports = (application) => {
    
    application.get('/whatsapp/login', (req, res) => {
        (async () => {
            page = await application.app.controllers.browser.page;
            await application.app.controllers.whatsapp.login(page, res);
        })();
    });

}