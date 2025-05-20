// src/routes/userRoutes.ts
import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.post('/signin', userController.signin);
router.post('/signup', userController.signup);
router.get('/logout', userController.logout);
router.get('/:id', userController.findById);

export default router;