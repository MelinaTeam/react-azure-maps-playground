import { IAzureMapOptions, AuthenticationType } from 'react-azure-maps';
// require('dotenv').config();

export const key = process.env.REACT_APP_AZURE_MAPS_KEY || '';

export const mapOptions: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
  center: [0, 0],
  view: 'Auto',
};
