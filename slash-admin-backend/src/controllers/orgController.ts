// src/controllers/orgController.ts
import { Request, Response } from 'express';
import { ResultEnum, Organization } from '../types';

// Mock data
const organizations: Organization[] = [
  {
    id: '1',
    name: 'Engineering',
    description: 'Engineering department',
    members: ['b34719e1-ce46-457e-9575-99505ecee828', 'efaa20ea-4dc5-47ee-a200-8a899be29494']
  },
  {
    id: '2',
    name: 'Marketing',
    description: 'Marketing department',
    members: ['efaa20ea-4dc5-47ee-a200-8a899be29494']
  },
  {
    id: '3',
    name: 'Sales',
    description: 'Sales department',
    members: ['b34719e1-ce46-457e-9575-99505ecee828']
  }
];

export const getOrgList = (req: Request, res: Response): void => {
  res.json({
    status: ResultEnum.SUCCESS,
    data: organizations
  });
};