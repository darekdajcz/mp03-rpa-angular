import { ClientModel } from '../../client/model/client.model';
import { BankModel } from '../../bank/model/bank.model';

export interface AccountModel {
  id: number;
  account_number: string;
  creation_date: string;
  bonuses: string;
  client_id?: ClientModel;
  clientX?: ClientModel;
  bank_id?: BankModel;
  bankX?: BankModel;
}
