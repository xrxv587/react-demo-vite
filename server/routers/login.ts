import { successMaker } from './../responseMaker';
import { Router } from 'express';

const router = Router();

router.post('/test', (req, res) => {
	res.json(successMaker({
		logged: true
	}));
});

export default router;