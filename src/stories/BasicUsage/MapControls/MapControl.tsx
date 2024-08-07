import React from 'react';
import {
  IAzureMapControls,
  ControlOptions,
  IAzureMapOptions,
  AzureMapsProvider,
  AzureMap,
  useAzureMaps,
} from 'react-azure-maps';
import DefaultMap from '../../DefaultMap/DefaultMap';
import atlas, { ControlPosition } from 'azure-maps-control';
import { mapOptions } from '../../../key';
import { useEffect, useState } from 'react';

export interface ControlProps {
  controls: IAzureMapControls[];
}

export const controls: IAzureMapControls[] = [
  {
    controlName: 'StyleControl',
    controlOptions: { mapStyles: 'all' },
    options: { position: 'top-right' } as ControlOptions,
  },
  {
    controlName: 'ZoomControl',
    options: { position: 'top-right' } as ControlOptions,
  },
  {
    controlName: 'CompassControl',
    controlOptions: { rotationDegreesDelta: 10, style: 'dark' },
    options: { position: 'bottom-right' } as ControlOptions,
  },
  {
    controlName: 'PitchControl',
    controlOptions: { pitchDegreesDelta: 5, style: 'dark' },
    options: { position: 'bottom-right' } as ControlOptions,
  },
  {
    controlName: 'TrafficControl',
    controlOptions: { incidents: true },
    options: { position: 'top-left' } as ControlOptions,
  },
  {
    controlName: 'TrafficLegendControl',
    controlOptions: {},
    options: { position: 'bottom-left' } as ControlOptions,
  },
];

const MapControl = ({ controls }: ControlProps) => {
  return <DefaultMap options={mapOptions} controls={controls} />;
};

export default MapControl;
