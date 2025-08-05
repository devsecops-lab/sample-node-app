import express from 'express';
import { greet } from './greet.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/greet/:name', (req, res) => {
  const message = greet(req.params.name);
  res.send({ message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
