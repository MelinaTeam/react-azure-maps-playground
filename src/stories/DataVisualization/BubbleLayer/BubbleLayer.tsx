import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { BubbleLayerOptions } from 'azure-maps-control';
import atlas from 'azure-maps-control';

const collection = generateRandomPoints();

const BubbleLayer = ({ radius, color, opacity, strokeColor, strokeWidth, strokeOpacity, blur }: BubbleLayerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={mapOptions}>
          <AzureMapDataSourceProvider id="BubbleLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
              type="BubbleLayer"
              options={{
                radius,
                color,
                opacity,
                strokeColor,
                strokeWidth,
                strokeOpacity,
                blur,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

function generateRandomPoints() {
  var layerData = [];

  for (var i = 0; i < 50; i++) {
    layerData.push(
      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {
        title: 'Pin_' + i,
      }),
    );
  }

  return layerData;
}

export default BubbleLayer;
