const express = require('express');
const { sequelize } = require('./models');

const app = express();
const port = 3022;

app.get('/', (req, res) => {
    res.send('test api');
});

app.listen(port, async () => {
    console.log(`Listening on http://localhost:${port}`);
	await sequelize.sync();
});
