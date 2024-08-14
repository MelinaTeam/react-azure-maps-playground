import { AzureMap, AzureMapsProvider } from 'react-azure-maps';
import { mapOptions } from '../../../key';

export interface MapStylesProps {
  showLogo?: boolean;
  showLabels?: boolean;
  renderWorldCopies?: boolean;
  showFeedbackLink?: boolean;
}

const MapStyles = ({ showLabels, showLogo, renderWorldCopies, showFeedbackLink }: MapStylesProps) => {
  return (
    <div className="defaultMap sb-unstyled">
      <AzureMapsProvider>
        <AzureMap
          options={mapOptions}
          styleOptions={{
            showLabels,
            showLogo,
            renderWorldCopies,
            showFeedbackLink,
          }}
        ></AzureMap>
      </AzureMapsProvider>
    </div>
  );
};

export default MapStyles;
