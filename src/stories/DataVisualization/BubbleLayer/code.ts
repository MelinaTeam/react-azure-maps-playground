// BubbleLayer/code.ts
export const code = `
import { mapOptions } from 'your_azure_maps_settings_file';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { BubbleLayerOptions } from 'azure-maps-control';
import atlas from 'azure-maps-control';

// Generate random points to build the data source for the BubbleLayer.
const collection = generateRandomPoints(); 

const BubbleLayer = () => {
  <AzureMapsProvider>
  <div className="defaultMap">
  <AzureMap options={mapOptions}>

    <AzureMapDataSourceProvider 
      id="BubbleLayer DataSourceProvider" 
      collection={collection}>
      <AzureMapLayerProvider
        type="BubbleLayer"
        options={{
          radius: 10,
          color: 'DodgerBlue',
          opacity: 1,
          strokeColor: 'DarkBlue',
          strokeWidth: 2,
          strokeOpacity: 1,
          blur: 0,
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

`;
