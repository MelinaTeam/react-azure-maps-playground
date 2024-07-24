import React from 'react';
import { AzureMap, AzureMapsProvider, IAzureMapOptions, IAzureMapControls } from 'react-azure-maps';
import { AuthenticationType } from 'azure-maps-control';
import { key } from '../../../key';

const authOption: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
};

export interface DefaultMapProps {
  options?: IAzureMapOptions;
  controls?: IAzureMapControls[];
}

const DefaultMap = ({ options, controls }: DefaultMapProps) => (
  <AzureMapsProvider>
    <div style={{ height: '300px', width: '700px' }}>
      <AzureMap options={{ ...options, ...authOption }} controls={controls} />
    </div>
  </AzureMapsProvider>
);

export default DefaultMap;
