const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs'); //to include the Node.js built-in file system module

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => { //to read the content of the budget-data.json file
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        const budgetData = JSON.parse(data);
        res.json(budgetData);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});