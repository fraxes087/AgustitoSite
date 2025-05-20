// src/routes/demoRoutes.ts
import { Router } from 'express';
import * as demoController from '../controllers/demoController';

const router = Router();

router.post('/tokenExpired', demoController.tokenExpired);

export default router;