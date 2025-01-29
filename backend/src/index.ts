import express from 'express';
import connectSocket from './utils/connectSocket';

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});
connectSocket(app);

