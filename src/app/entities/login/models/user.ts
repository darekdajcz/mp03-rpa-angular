import { UserRoles } from './user-roles';

export interface User {
  username: string;
  email: string;
  password: string;
  role: UserRoles;
}

export interface RegisterUser extends User {
}
