var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});