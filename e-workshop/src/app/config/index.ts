import { environment } from './../../environments/enviroment.dev';
export const CONFIG = {
  apiPath: environment.api,
  apiAuthPath: environment.authApi,
  dateTimeFormats: {
    shortDate: 'MM/DD/YY',
    dateTime: 'MM/DD/YYYY hh:mm ss'
  },
  timeoutRequest: 6000,
  storagePrefix: 'e-workshop'
};
