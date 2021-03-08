const express = require('express');
const app = express();

app.get('/heroku', (req, res) => {
    res.send('Hola')
});

app.listen(3000, () => {
    console.log('run port 3000')
})