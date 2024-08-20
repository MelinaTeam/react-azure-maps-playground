import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureMapOptions,
} from 'react-azure-maps';
import { mapOptions } from '../../../key';

export interface ClusterAggregatesProps {
  showBubbles: boolean;
  showNumbers: boolean;
}

const option: IAzureMapOptions = {
  ...mapOptions,
  center: [-97, 39],
  zoom: 1.5,
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

const symbolLayerOptions = {
  iconOptions: {
    image: 'none', //Hide the icon image.
  },
  textOptions: {
    textField: ['get', 'point_count_abbreviated'],
    offset: [0, 0.4],
  },
};

const bubbleLayer = (
  <AzureMapLayerProvider
    id={'BubbleLayer LayerProvider'}
    options={bubbleLayerOptions}
    type="BubbleLayer"
  ></AzureMapLayerProvider>
);

const symbolLayer = (
  <AzureMapLayerProvider
    id={'NumberLayer2 LayerProvider'}
    options={symbolLayerOptions}
    type="SymbolLayer"
  ></AzureMapLayerProvider>
);

const ClusterAggregates = ({ showBubbles, showNumbers }: ClusterAggregatesProps) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={option}>
          <AzureMapDataSourceProvider
            id="ClusterAggregates DataSourceProvider"
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
            {showBubbles ? bubbleLayer : <></>}
            {showNumbers ? symbolLayer : <></>}
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default ClusterAggregates;
