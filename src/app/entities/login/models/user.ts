import { UserRoles } from './user-roles';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: UserRoles;
  approved?: string;
}

export interface RegisterUser extends User {
}
