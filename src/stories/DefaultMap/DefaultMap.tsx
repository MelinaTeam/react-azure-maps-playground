import React from 'react';
import { AzureMap, AzureMapsProvider, IAzureMapOptions, IAzureMapControls, AuthenticationType } from 'react-azure-maps';
// import { AuthenticationType } from 'azure-maps-control';
import { key } from '../../key';

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

const DefaultMap = ({ options, controls }: DefaultMapProps) => {
  // console.log(process.env.REACT_APP_AZURE_MAPS_KEY)

  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={{ ...options, ...authOption }} controls={controls} />
      </div>
    </AzureMapsProvider>
  );
};

export default DefaultMap;
