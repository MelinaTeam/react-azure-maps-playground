import { useContext, useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import atlas from 'azure-maps-control';
import { IAzureMapsContextProps, MapType, IAzureMapPopup, AzureMapsContext } from 'react-azure-maps';

const InteractivePopup = ({ isVisible, popupContent, options, events }: IAzureMapPopup) => {
  const { mapRef } = useContext<IAzureMapsContextProps>(AzureMapsContext);
  const containerRef = document.createElement('div');
  const root = createRoot(containerRef);

  const [popupRef] = useState<atlas.Popup>(new atlas.Popup({ ...options, content: containerRef }));

  useCheckRefMount<MapType, boolean>(mapRef, true, (mref) => {
    events &&
      events.forEach(({ eventName, callback }) => {
        mref.events.add(eventName, popupRef, callback);
      });
    return () => {
      mref.popups.remove(popupRef);
    };
  });

  useEffect(() => {
    root.render(popupContent);
    popupRef.setOptions({
      ...options,
      content: containerRef,
    });
    if (mapRef && isVisible && !popupRef.isOpen()) {
      popupRef.open(mapRef);
    }
  }, [options, popupContent]);

  useEffect(() => {
    if (mapRef) {
      if (isVisible && !popupRef.isOpen()) {
        popupRef.open(mapRef);
      } else if (mapRef.popups.getPopups().length && !isVisible && popupRef.isOpen()) {
        popupRef.close();
      }
    }
  }, [isVisible]);

  return null;
};

function useCheckRefMount<T, T1>(dep: T | null, on: T1 | null, callback: (dep: T, on: T1) => void) {
  useEffect(() => {
    if (dep && on) {
      return callback(dep, on);
    }
  }, []);
}

export default InteractivePopup;
