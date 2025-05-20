// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import { ResultEnum } from '../types';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      status: ResultEnum.UNAUTHORIZED,
      message: 'Authentication required'
    });
    return;
  }
  
  const token = authHeader.split(' ')[1];
  
  // En un entorno real, verificarías el token JWT
  // Para este mock, simplemente verificamos que exista
  if (!token) {
    res.status(401).json({
      status: ResultEnum.UNAUTHORIZED,
      message: 'Invalid token'
    });
    return;
  }
  
  // Pasa al siguiente middleware o controlador
  next();
};