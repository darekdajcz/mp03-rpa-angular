import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

export const DELAY_TIMEOUT = 500
export const ALERT_MESSAGES_TIMEOUT = 300

export const ANGULAR_MAT_DATE_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

export const SERVER_API_URL = environment.SERVER_API_URL;

export const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }

