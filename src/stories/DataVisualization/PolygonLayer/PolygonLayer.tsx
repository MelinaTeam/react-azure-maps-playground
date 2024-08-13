import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { PolygonLayerOptions } from 'azure-maps-control';
import atlas from 'azure-maps-control';

const collection = new atlas.data.Polygon([
  [
    [-15.82031, 2.46018],
    [14.0625, 30.14512],
    [40.78125, 2.81137],
    [12.30468, 65.21989],
    [-15.82031, 2.46018],
  ],
]);

const PolygonLayer = ({ fillColor, fillOpacity }: PolygonLayerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={{ ...mapOptions, center: [12, 39], zoom: 0 }}>
          <AzureMapDataSourceProvider id="PolygonLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider type="PolygonLayer" options={{ fillColor, fillOpacity }} />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default PolygonLayer;
