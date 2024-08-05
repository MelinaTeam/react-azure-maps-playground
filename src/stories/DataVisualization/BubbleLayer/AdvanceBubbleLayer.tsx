import React, { useContext, useEffect } from 'react';
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureMapOptions,
  IAzureMapLayerProps,
  AzureMapLayerContext,
} from 'react-azure-maps';
import { AuthenticationType } from 'azure-maps-control';
import { key } from '../../../key';
import { wrapperStyles } from '../../../examples/RouteExample';

export interface BubbleLayerProps {
  showBasicBubble: boolean;
  showNumbers: boolean;
}

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key,
  },
  center: [-97, 39],
  zoom: 3,
  // style: 'night',
  view: 'Auto',
};

const bubbleLayerOptions = {
  //Scale the size of the clustered bubble based on the number of points inthe cluster.
  radius: [
    'step',
    ['get', 'point_count'],
    20, //Default of 20 pixel radius.
    100,
    30, //If point_count >= 100, radius is 30 pixels.
    750,
    40, //If point_count >= 750, radius is 40 pixels.
  ],

  //Change the color of the cluster based on the value on the point_cluster property of the cluster.
  color: [
    'step',
    ['get', 'point_count'],
    'rgba(0,255,0,0.8)', //Default to green.
    100,
    'rgba(255,255,0,0.8)', //If the point_count >= 100, color is yellow.
    750,
    'rgba(255,0,0,0.8)', //If the point_count >= 100, color is red.
  ],
  strokeWidth: 0,
  filter: ['has', 'point_count'], //Only rendered data points which have a point_count property, which clusters do.
};

const basicBubbleLayer = (
  <AzureMapLayerProvider
    id={'BubbleLayer LayerProvider'}
    options={bubbleLayerOptions}
    type="BubbleLayer"
  ></AzureMapLayerProvider>
);

const numbersForBubbleLayer = (
  <AzureMapLayerProvider
    id={'BubbleLayer2 LayerProvider'}
    options={{
      iconOptions: {
        image: 'none', //Hide the icon image.
      },
      textOptions: {
        textField: ['get', 'point_count_abbreviated'],
        offset: [0, 0.4],
      },
    }}
    type="SymbolLayer"
  ></AzureMapLayerProvider>
);

const BubbleLayer = ({ showBasicBubble, showNumbers }: BubbleLayerProps) => {
  const { layerRef } = useContext<IAzureMapLayerProps>(AzureMapLayerContext);
  useEffect(() => {}, [showBasicBubble]);
  return (
    <div style={wrapperStyles.map}>
      <AzureMapsProvider>
        <div style={{ height: '300px', width: '700px' }}>
          <AzureMap options={option}>
            <AzureMapDataSourceProvider
              id={'BubbleLayer DataSourceProvider'}
              dataFromUrl="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
              options={{
                //Tell the data source to cluster point data.
                cluster: true,

                //The radius in pixels to cluster points together.
                clusterRadius: 45,

                //The maximium zoom level in which clustering occurs.
                //If you zoom in more than this, all points are rendered as symbols.
                clusterMaxZoom: 15,
              }}
            >
              {showBasicBubble ? basicBubbleLayer : <></>}
              {showNumbers ? numbersForBubbleLayer : <></>}
            </AzureMapDataSourceProvider>
          </AzureMap>
        </div>
      </AzureMapsProvider>
    </div>
  );
};

export default BubbleLayer;
