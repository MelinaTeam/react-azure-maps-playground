import { AzureMap, AzureMapsProvider, IAzureMapOptions, IAzureMapControls } from 'react-azure-maps';
import { mapOptions } from '../../key';

export interface DefaultMapProps {
  options?: IAzureMapOptions;
  controls?: IAzureMapControls[];
}

const DefaultMap = ({ options, controls }: DefaultMapProps) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={{ ...options, ...mapOptions }} controls={controls} />
      </div>
    </AzureMapsProvider>
  );
};

export default DefaultMap;
