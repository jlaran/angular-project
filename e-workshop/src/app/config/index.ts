import { environment } from './../../environments/environment';
export const CONFIG = {
  apiPath: environment.authApi,
  // apiAuthPath: environment.api,
  dateTimeFormats: {
    shortDate: 'MM/DD/YY',
    dateTime: 'MM/DD/YYYY hh:mm ss'
  },
  timeoutRequest: 6000,
  storagePrefix: 'cenfo'
}
