import express from 'express';
import fs from 'fs';
import path from 'path';
import { successMaker } from '../responseMaker';

const router = express.Router();

router.get('/getTodo', (req, res) => {
	const content = fs.readFileSync(path.resolve(__dirname, '../data/todoList.json'), {
		encoding: 'utf-8'
	});
	// 模拟慢请求
	setTimeout(() => {
		const data = successMaker(JSON.parse(content));
		res.json(data);
	}, 500);
});

export default router;