// src/routes/orgRoutes.ts
import { Router } from 'express';
import * as orgController from '../controllers/orgController';

const router = Router();

router.get('/', orgController.getOrgList);

export default router;