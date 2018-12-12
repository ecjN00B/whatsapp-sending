module.exports = (application) => {
    
    application.get('/browser/new', (req, res) => {
        application.app.controllers.browser.newBrowser(res); 
    });

}