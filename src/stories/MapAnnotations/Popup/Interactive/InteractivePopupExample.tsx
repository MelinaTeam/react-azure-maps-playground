import { AzureMap, AzureMapsProvider, IAzureMapPopup } from 'react-azure-maps';
import { mapOptions } from '../../../../key';
import InteractivePopup from './InteractivePopup';
import PopupContent from './PopupContent';
import { useState } from 'react';

const Popup = ({ isVisible, options }: IAzureMapPopup) => {
  const [text, setText] = useState('Hello World');

  // use position as argument would be better
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <button onClick={() => setText(text + '1')}>Change text</button>
        <AzureMap options={mapOptions}>
          <InteractivePopup isVisible={isVisible} options={options} popupContent={<PopupContent text={text} />} />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default Popup;
