import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { ImageLayerOptions } from 'azure-maps-control';

const ImageLayer = ({ opacity, contrast, saturation, hueRotation, fadeDuration }: ImageLayerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={{ ...mapOptions }}>
          <AzureMapDataSourceProvider id="ImageLayer DataSourceProvider">
            <AzureMapLayerProvider
              type="ImageLayer"
              options={{
                url: 'logo2.png',
                // * An array of positions for the corners of the image listed in clockwise order: [top left, top right, bottom right, bottom left].
                coordinates: [
                  [-20, 20],
                  [20, 20],
                  [20, -20],
                  [-20, -20],
                ],
                opacity,
                contrast,
                saturation,
                hueRotation,
                fadeDuration,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default ImageLayer;
