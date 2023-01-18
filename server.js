const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('./build'));
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/src/index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});