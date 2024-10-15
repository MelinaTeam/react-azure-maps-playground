import { AzureMap, AzureMapsProvider, IAzureMapPopup } from 'react-azure-maps';
import { mapOptions } from '../../../../key';
import InteractivePopup from './InteractivePopup';
import PopupContent from './PopupContent';
import { useState } from 'react';

const InteractivePopupExample = ({ isVisible, options }: IAzureMapPopup) => {
  const [bgColor, setBgColor] = useState('white');

  // click to change color randomly
  const changeColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(color);
  };
  return (
    <AzureMapsProvider>
      <div>
        <button onClick={changeColor} style={{ marginBottom: '10px' }}>
          Change popup color
        </button>
        <div className="defaultMap sb-unstyled">
          <AzureMap options={mapOptions}>
            <InteractivePopup isVisible={isVisible} options={options}>
              <PopupContent bgColor={bgColor} />
            </InteractivePopup>
          </AzureMap>
        </div>
      </div>
    </AzureMapsProvider>
  );
};

export default InteractivePopupExample;
