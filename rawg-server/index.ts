import express from 'express';
import cors from 'cors';
import init from './startup/init';

const app = express();


init(app)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    });