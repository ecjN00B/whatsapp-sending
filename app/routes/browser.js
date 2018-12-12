module.exports = (app) => {
    
    app.get('/browser/list', (req, res) => {
        res.send('get browser list');
    });

    app.post('/browser/new', (req, res) => {
        res.send('generate new browser');
    });

}