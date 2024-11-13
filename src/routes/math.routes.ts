import { Router } from 'express';
import { resolveMathEquation } from '../controllers';

const router = Router();

router.post('/', resolveMathEquation);

export default router;