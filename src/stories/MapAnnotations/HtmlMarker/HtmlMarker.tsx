import { AzureMap, AzureMapHtmlMarker, AzureMapsProvider } from 'react-azure-maps';
import { HtmlMarkerOptions, SymbolLayerOptions } from 'azure-maps-control';
import { mapOptions } from '../../../key';

const HtmlMarker = ({ color, text, position }: HtmlMarkerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={mapOptions}>
          <AzureMapHtmlMarker
            //   key={rendId}
            options={{
              color,
              text,
              position,
            }}
            // markerContent={<div>My HTML content</div>} // need further implementation
          />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default HtmlMarker;
