"use strict";
// src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// ルートへのGETリクエストに対するレスポンス
app.get('/', (req, res) => {
    res.send('バックエンド側をエクスプレスで作る');
});
// サーバーをポート3000で起動
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
