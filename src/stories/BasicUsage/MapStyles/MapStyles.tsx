import { AzureMap, AzureMapsProvider } from 'react-azure-maps';
import { mapOptions } from '../../../key';

export interface MapStylesProps {
  showLogo?: boolean;
  showLabels?: boolean;
  renderWorldCopies?: boolean;
}

const MapStyles = ({ showLabels, showLogo, renderWorldCopies }: MapStylesProps) => {
  return (
    <div className="defaultMap">
      <AzureMapsProvider>
        <AzureMap
          options={mapOptions}
          styleOptions={{
            showLabels: showLabels,
            showLogo: showLogo,
            renderWorldCopies: renderWorldCopies,
          }}
        ></AzureMap>
      </AzureMapsProvider>
    </div>
  );
};

export default MapStyles;
