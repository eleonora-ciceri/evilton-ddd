import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// FIXME add api

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});