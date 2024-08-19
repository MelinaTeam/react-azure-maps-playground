import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapHtmlMarker } from 'react-azure-maps';
import './HtmlMarkerEvents.css';

// generate random points
const collection = generateRandomPoints();

// content for the html marker
const circleMarker = (
  <div
    className="circle-marker"
    style={{
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      backgroundColor: 'crimson',
    }}
  ></div>
);

const LayerEvents = () => {
  // add class name to the marker to apply css animation
  const startBlink = (e: any) => {
    // access the marker through the event object
    e.target.element.firstElementChild.className = 'circle-marker blink';
  };
  const stopBlink = (e: any) => {
    e.target.element.firstElementChild.className = 'circle-marker';
  };

  return (
    <div className="defaultMap sb-unstyled">
      <AzureMapsProvider>
        <AzureMap options={mapOptions}>
          {collection.map((point: number[], index) => (
            <AzureMapHtmlMarker
              key={index}
              options={{ position: point, draggable: true }}
              markerContent={circleMarker}
              events={[
                {
                  eventName: 'dragstart',
                  callback: startBlink,
                },
                {
                  eventName: 'dragend',
                  callback: stopBlink,
                },
              ]}
            />
          ))}
        </AzureMap>
      </AzureMapsProvider>
    </div>
  );
};

function generateRandomPoints() {
  var layerData = [];

  for (var i = 0; i < 30; i++) {
    layerData.push([Math.random() * 360 - 180, Math.random() * 170 - 85]);
  }

  return layerData;
}

export default LayerEvents;
