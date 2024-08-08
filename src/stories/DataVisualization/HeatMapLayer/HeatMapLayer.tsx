import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';

export interface HeatMapLayerProps {
  radius?: number;
  opacity?: number;
  intensity?: number;
  weight?: boolean;
  color?: any;
}

const magWeight = [
  'interpolate',
  ['exponential', 2], //Using an exponential interpolation since earthquake magnitudes are on an exponential scale.
  ['get', 'mag'],
  0,
  0,
  10,
  1,
];

const HeatMapLayer = ({ radius, opacity, intensity, weight, color }: HeatMapLayerProps) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={mapOptions}>
          <AzureMapDataSourceProvider
            id="LineLayer DataSourceProvider"
            dataFromUrl="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
          >
            <AzureMapLayerProvider
              type="HeatLayer"
              options={{
                color,
                radius,
                opacity,
                intensity,
                weight: weight ? magWeight : 1,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default HeatMapLayer;
