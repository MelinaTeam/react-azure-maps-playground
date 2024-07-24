import React, { useState } from 'react';
import { AzureMap, AzureMapsProvider, IAzureMapOptions } from 'react-azure-maps';
import { AuthenticationType } from 'azure-maps-control';
import { key } from '../../../key';

const option: IAzureMapOptions = {
  center: [-0.076083, 51.50812],
  zoom: 16,
  pitch: 60,
  view: 'Auto',
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
};

export interface BuildingModelProps {
  showBuildingModels: boolean;
}

const Building3d = ({ showBuildingModels }: BuildingModelProps) => {
  return (
    <div style={{ width: '700px', height: '300px' }}>
      <AzureMapsProvider>
        <AzureMap options={option} styleOptions={{ showBuildingModels: showBuildingModels }}></AzureMap>
      </AzureMapsProvider>
    </div>
  );
};

export default Building3d;
