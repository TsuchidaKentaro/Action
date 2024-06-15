// src/next-app.ts

import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('もう一つ機能を付けた場合');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
