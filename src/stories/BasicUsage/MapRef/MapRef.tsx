import React, { useContext, useEffect, useState } from 'react';
import { AzureMap, IAzureMapOptions, useAzureMaps } from 'react-azure-maps';
import { data, layer, source, AuthenticationType } from 'azure-maps-control';
import { key } from '../../../key';

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
};

type position = { longitude: number; latitude: number };
export interface MapRefProps {
  // show tile boundaries
  showTileBoundaries?: boolean;
  // change the center of the map
  mapCenter?: { longitude: number; latitude: number };
}

/**
 * Map Control component
 */

const dataSourceRef = new source.DataSource();
const layerRef = new layer.SymbolLayer(dataSourceRef);

const MapRef = ({ showTileBoundaries = true, mapCenter = getRandomLocation() }: MapRefProps) => {
  const { mapRef, isMapReady } = useAzureMaps();
  const toggleTileBoundaries = (showTileBoundaries: boolean) => {
    if (mapRef)
      // toggle tile boundaries
      mapRef.setStyle({ showTileBoundaries });
  };

  const setMapCenter = (center: position) => {
    if (mapRef)
      // set map center
      mapRef.setCamera({ center: [center.longitude, center.latitude] });
  };

  useEffect(() => {
    if (isMapReady && mapRef) {
      // Need to add source and layer to map on init and ready
      mapRef.sources.add(dataSourceRef);
      mapRef.layers.add(layerRef);

      // set map center
      setMapCenter(mapCenter);
      // toggle tile boundaries
      toggleTileBoundaries(showTileBoundaries);
      // add a marker to the center of the map
      const newPoint = new data.Position(mapCenter.longitude, mapCenter.latitude);
      dataSourceRef.add(new data.Feature(new data.Point(newPoint)));
    }
  }, [isMapReady]);

  useEffect(() => {
    toggleTileBoundaries(showTileBoundaries);
  }, [showTileBoundaries]);

  useEffect(() => {
    setMapCenter(mapCenter);
  }, [mapCenter]);

  return (
    <div style={{ height: '300px', width: '700px' }}>
      <AzureMap options={option} />
    </div>
  );
};

export default MapRef;

const getRandomLocation = (): position => {
  const longitude = Math.floor(Math.random() * (180 - -180) + -180);
  const latitude = Math.floor(Math.random() * (-90 - 90) + 90);
  return { longitude, latitude };
};
