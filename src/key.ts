import { IAzureMapOptions, AuthenticationType } from 'react-azure-maps';

export const key = process.env.STORYBOOK_AZURE_MAPS_KEY || '';

export const mapOptions: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
  center: [0, 0],
  view: 'Auto',
};
