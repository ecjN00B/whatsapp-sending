var app = require('./config/server'),
    port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});