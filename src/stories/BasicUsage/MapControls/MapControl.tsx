import React from 'react';
import { IAzureMapControls, IAzureMapOptions, AzureMapsProvider, AzureMap, useAzureMaps } from 'react-azure-maps';
import DefaultMap from '../../DefaultMap/DefaultMap';
import atlas, { ControlPosition } from 'azure-maps-control';
import { mapOptions } from '../../../key';
import { useEffect, useState } from 'react';

export interface ControlProps {
  controlName: string;
  controlOptions?: atlas.Options;
  position: ControlPosition;
}

const MapControl = ({ controlName, controlOptions, position }: ControlProps) => {
  return <DefaultMap options={mapOptions} controls={[{ controlName, controlOptions, options: { position } }]} />;
};

export default MapControl;
