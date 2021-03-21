import express from 'express';

const app = express();

app.use((req, res) => {
	res.send('hey');
});

app.listen(3000);