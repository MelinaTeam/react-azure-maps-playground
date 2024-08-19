import { AzureMap, AzureMapHtmlMarker, AzureMapsProvider } from 'react-azure-maps';
import { HtmlMarkerOptions } from 'azure-maps-control';
import { mapOptions } from '../../../key';

const HtmlMarker = ({ color, text, position, draggable }: HtmlMarkerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={mapOptions}>
          <AzureMapHtmlMarker
            options={{
              color,
              text,
              position,
              draggable,
            }}
          />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default HtmlMarker;
