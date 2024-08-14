import { useEffect, useState } from 'react';
import { AzureMap, useAzureMaps } from 'react-azure-maps';
import { mapOptions } from '../../../key';

export interface setStyleProps {
  // show tile boundaries
  showTileBoundaries?: boolean;
}

const SetStyle = () => {
  const { mapRef, isMapReady } = useAzureMaps();
  const [showTileBoundaries, setShowTileBoundaries] = useState(false);

  useEffect(() => {
    if (isMapReady && mapRef)
      // toggle tile boundaries
      mapRef.setStyle({ showTileBoundaries });
  }, [isMapReady, showTileBoundaries]);

  return (
    <>
      <button
        style={{ color: 'dodgerblue', marginBottom: '10px' }}
        onClick={() => setShowTileBoundaries(!showTileBoundaries)}
      >
        Toggle Tile Boundaries
      </button>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={mapOptions} />
      </div>
    </>
  );
};

export default SetStyle;
