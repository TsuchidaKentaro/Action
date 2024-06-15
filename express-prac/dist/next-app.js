"use strict";
// src/next-app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.get('/', (req, res) => {
    res.send('もう一つ機能を付けた場合');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
