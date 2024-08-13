import { useContext, useEffect } from 'react';
import { useAzureMaps } from 'react-azure-maps';
import { AzureMapLayerContext, IAzureMapLayerProps } from 'react-azure-maps';

const Test = () => {
  const { layerRef } = useContext<IAzureMapLayerProps>(AzureMapLayerContext);
  const { mapRef, isMapReady } = useAzureMaps();

  const onClick = () => {
    console.log(layerRef); // returns undefined
    console.log(mapRef?.layers); // this works
  };

  useEffect(() => {
    if (isMapReady) {
      console.log('Map is ready');
      onClick();
    }
  }, [isMapReady]);

  return (
    <button
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        position: 'relative',
        top: '-50px',
        left: '-50px',
      }}
      onClick={onClick}
    >
      Test
    </button>
  );
};

export default Test;
