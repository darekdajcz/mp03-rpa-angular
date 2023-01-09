import { TokenModel } from './token.model';
import { User } from './user';

export interface LoginResponse {
  token: TokenModel;
  user: User
}
