import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { LineLayerOptions } from 'azure-maps-control';
import atlas from 'azure-maps-control';

const collection = new atlas.data.LineString([
  [-74.0039, 40.88029],
  [-87.583, 41.93497],
  [-105.20507, 39.77476],
  [-122.43164, 47.66538],
]);

const LineLayer = ({ strokeColor, strokeWidth, strokeOpacity, blur, lineCap, translate }: LineLayerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={{ ...mapOptions, center: [-105.20507, 39.77476], zoom: 1.4 }}>
          <AzureMapDataSourceProvider id="LineLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
              type="LineLayer"
              options={{
                strokeColor,
                strokeWidth,
                strokeOpacity,
                blur,
                lineCap,
                translate,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default LineLayer;
