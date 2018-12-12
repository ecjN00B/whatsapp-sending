module.exports = (application) => {
    
    application.get('/message/first', (req, res) => {
        (async () => {
            page = await application.app.controllers.browser.page;
            application.app.controllers.message.firstSend(page, res);
        })();
    });

}