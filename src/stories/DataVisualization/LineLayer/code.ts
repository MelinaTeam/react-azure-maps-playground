export const code = `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';

// create a line string for the data source
const collection = new atlas.data.LineString([
  [-74.0039, 40.88029],
  [-87.583, 41.93497],
  [-105.20507, 39.77476],
  [-122.43164, 47.66538],
]);

const LineLayer = () => {
  return (
    <AzureMapsProvider>
    <div className="defaultMap">
    <AzureMap options={your_options}>
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

`;
