const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.send('just /, hi');
});

app.get('/deep', (req, res) => {
    res.send('/deep, one level');
});

app.listen(PORT,HOST);
console.log(`listening on ${HOST}:${PORT}`);




