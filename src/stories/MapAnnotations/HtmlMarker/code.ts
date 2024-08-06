export const code = `
import { AzureMap, AzureMapHtmlMarker, AzureMapsProvider } from 'react-azure-maps';
import { HtmlMarkerOptions, SymbolLayerOptions } from 'azure-maps-control';

const HtmlMarker = () => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={your_options}>
          <AzureMapHtmlMarker
            options={{
                color: 'DodgerBlue',
                text: '10',
                position: [0, 0],
            }}
          />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};
`;
