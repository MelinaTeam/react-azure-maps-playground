import React from 'react';
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapFeature,
  AzureMapHtmlMarker,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureDataSourceChildren,
  IAzureMapFeature,
  IAzureMapHtmlMarkerEvent,
  IAzureMapLayerType,
  IAzureMapOptions,
} from 'react-azure-maps';
import { AuthenticationType, data, HtmlMarkerOptions, SymbolLayerOptions } from 'azure-maps-control';
import { key } from '../../../key';
import atlas from 'azure-maps-control';

// console.log(atlas.getAllImageTemplateNames());
const options: HtmlMarkerOptions = {
  position: [0, 0],
  text: 'My text',
  title: 'Title',
  //   color: 'DodgerBlue',
};

function renderHTMLPoint(): JSX.Element {
  const rendId = Math.random();
  return (
    <AzureMapHtmlMarker
      //   key={rendId}
      options={options}
      markerContent={<div>My HTML content</div>} // need further implementation
    />
  );
}

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
  center: [0, 0],
  //   zoom: 2,
  view: 'Auto',
};

const HtmlMarker = () => {
  return (
    <AzureMapsProvider>
      <div style={{ width: '700px', height: '300px' }}>
        <AzureMap options={option}>{renderHTMLPoint()}</AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default HtmlMarker;
