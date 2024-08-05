import { useEffect, useState } from 'react';
import { AzureMap, useAzureMaps } from 'react-azure-maps';
import { mapOptions } from '../../../key';

const SetCenter = () => {
  const [mapCenter, setMapCenter] = useState([0, 0] as Number[]);
  const { mapRef, isMapReady } = useAzureMaps();

  const applyMapCenter = (mapCenter: Number[]) => {
    if (mapRef)
      // set map center
      mapRef.setCamera({ center: mapCenter });
  };

  useEffect(() => {
    if (isMapReady && mapRef) {
      // set map center
      applyMapCenter(mapCenter);
    }
  }, [isMapReady]);

  useEffect(() => {
    applyMapCenter(mapCenter);
  }, [mapCenter]);

  return (
    <>
      <button style={{ color: 'dodgerblue', marginBottom: '10px' }} onClick={() => setMapCenter(getRandomPosition())}>
        Change Map Center
      </button>
      <div className="defaultMap">
        <AzureMap options={mapOptions} />
      </div>
    </>
  );
};

const getRandomPosition = () => {
  const randomLongitude = Math.floor(Math.random() * (180 - -180) + -180);
  const randomLatitude = Math.floor(Math.random() * (-90 - 90) + 90);
  return [randomLatitude, randomLongitude];
};

export default SetCenter;
