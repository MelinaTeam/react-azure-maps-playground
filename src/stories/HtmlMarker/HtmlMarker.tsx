import React from 'react';
import {
  AzureMap,
  AzureMapHtmlMarker,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureMapOptions,
} from 'react-azure-maps';
import { HtmlMarkerOptions, SymbolLayerOptions } from 'azure-maps-control';
import { mapOptions } from '../../key';
import atlas from 'azure-maps-control';

// console.log(atlas.getAllImageTemplateNames());

const HtmlMarker = ({ color, text, position }: HtmlMarkerOptions) => {
  return (
    <AzureMapsProvider>
      <div style={{ width: '700px', height: '300px' }}>
        <AzureMap options={mapOptions}>
          <AzureMapHtmlMarker
            //   key={rendId}
            options={{
              color,
              text,
              position,
            }}
            // markerContent={<div>My HTML content</div>} // need further implementation
          />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default HtmlMarker;
