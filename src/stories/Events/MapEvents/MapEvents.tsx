import { AzureMap, AzureMapsProvider, AzureMapPopup } from 'react-azure-maps';
import { useState } from 'react';
import { mapOptions } from '../../../key';

const MapEvents = () => {
  const [position, setPosition] = useState([0, 0]);

  const handleMapClick = (e: any) => {
    setPosition(e.position);
  };
  const displayPosition = (position: number[]) => {
    // Format position as a string
    // round to 4 decimal places
    const longitude = `${Number(position[0]).toFixed(4)} °${position[0] > 0 ? 'E' : 'W'}`;
    const latitude = `${Number(position[1]).toFixed(4)} °${position[1] > 0 ? 'N' : 'S'}`;
    return `${longitude}, ${latitude}`;
  };

  return (
    <div className="defaultMap sb-unstyled">
      <AzureMapsProvider>
        <AzureMap options={mapOptions} events={{ click: handleMapClick }}>
          <AzureMapPopup
            isVisible
            options={{ position: position }}
            popupContent={<div style={{ padding: '20px' }}>{displayPosition(position)}</div>}
          />
        </AzureMap>
      </AzureMapsProvider>
    </div>
  );
};

export default MapEvents;
