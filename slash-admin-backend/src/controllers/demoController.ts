// src/controllers/demoController.ts
import { Request, Response } from 'express';
import { ResultEnum } from '../types';

export const tokenExpired = (req: Request, res: Response): void => {
  res.status(401).json({
    status: ResultEnum.UNAUTHORIZED,
    message: 'Token has expired'
  });
};