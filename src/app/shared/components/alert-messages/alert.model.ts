export class Alert {
  id!: string;
  type!: AlertType;
  message!: string;
  autoClose = true;
  keepAfterRouteChange?: boolean;
  params?: any;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
    if (this.params) {
      Object.assign(this, this.params);
    }
  }
}

export enum AlertType {
  Success = 'Success',
  Error = 'Error',
  Info = 'Info',
  Warning = 'Warning'
}
