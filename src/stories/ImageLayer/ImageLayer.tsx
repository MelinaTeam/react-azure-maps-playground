import { mapOptions } from '../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { LineLayerOptions } from 'azure-maps-control';
import atlas from 'azure-maps-control';

const collection = new atlas.data.LineString([
  [-74.0039, 40.88029],
  [-87.583, 41.93497],
  [-105.20507, 39.77476],
  [-122.43164, 47.66538],
]);

const ImageLayer = () => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={{ ...mapOptions }}>
          {/* <AzureMapDataSourceProvider id="ImageLayer DataSourceProvider"> */}
          <AzureMapLayerProvider
            type="ImageLayer"
            options={{
              url: 'https://i.imgur.com/fc4Tw0H.jpg',
              // * An array of positions for the corners of the image listed in clockwise order: [top left, top right, bottom right, bottom left].
              coordinates: [
                [-130, 45],
                [-115, 45],
                [-115, 35],
                [-130, 35],
              ],
            }}
          />
          {/* </AzureMapDataSourceProvider> */}
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default ImageLayer;
