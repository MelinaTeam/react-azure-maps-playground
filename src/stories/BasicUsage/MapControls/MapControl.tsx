import React from 'react';
import { IAzureMapControls, IAzureMapOptions, AzureMapsProvider, AzureMap, useAzureMaps } from 'react-azure-maps';
import DefaultMap from '../../DefaultMap/DefaultMap';
import { AuthenticationType, ControlOptions } from 'azure-maps-control';
import { mapOptions } from '../../../key';
import { useEffect, useState } from 'react';

export interface MapControlProps {
  controls?: IAzureMapControls[];
}

const MapControl = ({ controls }: MapControlProps) => {
  return <DefaultMap options={mapOptions} controls={controls} />;
};

export default MapControl;
