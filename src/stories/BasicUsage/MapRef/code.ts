export const code = `
import React, { useContext, useEffect, useState } from 'react';
import {
  AzureMap,
  IAzureMapOptions,
  AzureMapsContext,
  IAzureMapsContextProps,
} from 'react-azure-maps';
import { data, layer, source } from 'azure-maps-control';
import DefaultMap from './DefaultMap';


type position = { longitude: number; latitude: number };

// Initialize data source and layer
const dataSourceRef = new source.DataSource();
const layerRef = new layer.SymbolLayer(dataSourceRef);

/**
 * Map Control component
 */

export const MapControl = () => {
  const { mapRef, isMapReady } = useContext<IAzureMapsContextProps>(AzureMapsContext);
  const [showTileBoundaries, setShowTileBoundaries] = useState(true);

  const toggleTileBoundaries = (showTileBoundaries: boolean) => {
    if (mapRef)
      // toggle tile boundaries
      mapRef.setStyle({ showTileBoundaries });
  };

  const setMapCenter = (center: position) => {
    if (mapRef) {
      // set map center
      mapRef.setCamera({ center: [center.longitude, center.latitude] });
      // add a marker to the center of the map
      const newPoint = new data.Position(mapCenter.longitude, mapCenter.latitude);
      dataSourceRef.add(new data.Feature(new data.Point(newPoint)));
    }
  };

  useEffect(() => {
    if (isMapReady && mapRef) {
      // Need to add source and layer to map on init and ready
      mapRef.sources.add(dataSourceRef);
      mapRef.layers.add(layerRef);
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
      <DefaultMap/>
    </div>
  );
};
`;
