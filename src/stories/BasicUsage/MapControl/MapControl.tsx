import React from 'react';
import { IAzureMapControls, IAzureMapOptions, AzureMapsProvider, AzureMap, useAzureMaps } from 'react-azure-maps';
import DefaultMap from '../DefaultMap/DefaultMap';
import { AuthenticationType, ControlOptions } from 'azure-maps-control';
import { key } from '../../../key';
import { useEffect, useState } from 'react';

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
  center: [-100, 40],
  zoom: 3,
  view: 'Auto',
};

export interface MapControlProps {
  controls?: IAzureMapControls[];
}

const MapControl = ({ controls }: MapControlProps) => {
  return <DefaultMap options={option} controls={controls} />;
};

export default MapControl;
