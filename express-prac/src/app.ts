// src/app.ts

import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// ルートへのGETリクエストに対するレスポンス
app.get('/', (req: Request, res: Response) => {
  res.send('バックエンド側をエクスプレスで作る');
});

// サーバーをポート3000で起動
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
