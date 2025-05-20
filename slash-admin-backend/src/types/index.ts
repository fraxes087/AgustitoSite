// src/types/index.ts
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 500,
    UNAUTHORIZED = 401
  }
  
  export interface Result<T = any> {
    status: ResultEnum;
    data?: T;
    message?: string;
  }
  
  export interface UserInfo {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    roles?: string[];
    role?: any;
    permissions?: any[];
  }
  
  export interface UserToken {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
  
  export interface Organization {
    id: string;
    name: string;
    description?: string;
    members?: string[];
  }
  
  export enum BasicStatus {
    ENABLE = 1,
    DISABLE = 0
  }
  
  export enum PermissionType {
    CATALOGUE = 'catalogue',
    MENU = 'menu'
  }
  
  export interface Permission {
    id: string;
    parentId: string;
    label: string;
    name: string;
    icon?: string; // Cambiado a opcional con ?
    type: PermissionType;
    route: string;
    order?: number;
    children?: Permission[];
    status?: BasicStatus;
    newFeature?: boolean;
    hideTab?: boolean;
    frameSrc?: string;
    component?: string;
    hide?: boolean;
  }