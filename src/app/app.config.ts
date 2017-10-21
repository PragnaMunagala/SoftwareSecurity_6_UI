import {InjectionToken} from '@angular/core';

export interface IAppConfig {
  apiBaseUrl: string;
  auth: object;
}

export const AppConfig: IAppConfig = {
  apiBaseUrl: 'https://apigargoyle.com/GargoyleApi',
  auth: {
    'userId': 'labuser',
    'apiKey': 'a9a2370f-4959-4511-b263-5477d31329cf'
  },
}

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
