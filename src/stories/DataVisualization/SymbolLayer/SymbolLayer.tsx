import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';

const collection = generateRandomPoints();
export interface SymbolLayerProps {
  image?: string;
  optionsSize?: number;
  optionsAnchor?: string;
  optionsOffset?: number[];
  font?: string;
  textSize?: number;
  textOffset?: number[];
  textAnchor?: string;
  color?: string;
  haloColor?: string;
  haloWidth?: number;
}

const SymbolLayer = ({
  image,
  optionsSize,
  optionsAnchor,
  optionsOffset,
  font,
  textSize,
  textOffset,
  textAnchor,
  color,
  haloColor,
  haloWidth,
}: SymbolLayerProps) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={mapOptions}>
          <AzureMapDataSourceProvider id="SymbolLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
              type="SymbolLayer"
              options={{
                iconOptions: {
                  image,
                  size: optionsSize,
                  anchor: optionsAnchor,
                  offset: optionsOffset,
                },
                textOptions: {
                  textField: ['get', 'title'],
                  size: textSize,
                  offset: textOffset,
                  anchor: textAnchor,
                  color,
                  haloColor,
                  haloWidth,
                },
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

export default SymbolLayer;
