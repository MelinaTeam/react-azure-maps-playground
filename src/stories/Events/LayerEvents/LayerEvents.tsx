import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';
import { useState } from 'react';

const collection = generateRandomPoints();

const LayerEvents = () => {
  const [color, setColor] = useState('red');

  const setRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomHex.padStart(6, '0')}`);
  };

  return (
    <div className="defaultMap sb-unstyled">
      <AzureMapsProvider>
        <AzureMap options={mapOptions}>
          <AzureMapDataSourceProvider id="BubbleLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
              type="BubbleLayer"
              options={{
                radius: 16,
                color,
              }}
              events={{
                mouseenter: setRandomColor,
                mouseleave: setRandomColor,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </AzureMapsProvider>
    </div>
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

export default LayerEvents;
