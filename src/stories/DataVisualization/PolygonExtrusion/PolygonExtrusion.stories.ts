import type { Meta, StoryObj } from '@storybook/react';
import PolygonExtrusionLayer from './PolygonExtrusion';

const meta: Meta<typeof PolygonExtrusionLayer> = {
  title: 'Data Visualization/Polygon Extrusion Layer',
  component: PolygonExtrusionLayer,
  parameters: {
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas, { ControlOptions } from 'azure-maps-control';

const collection = new atlas.data.Polygon([
  [
    [-122.132815, 47.636661],
    [-122.133631, 47.636676],
    [-122.133636, 47.63652],
    [-122.133523, 47.63651],
    [-122.133545, 47.636361],
    [-122.133759, 47.636361],
    [-122.133759, 47.636173],
    [-122.132703, 47.63617],
    [-122.132713, 47.636343],
    [-122.13303, 47.636347],
    [-122.133035, 47.636528],
    [-122.13281, 47.636528],
    [-122.132815, 47.636661],
  ],
]);

const PolygonExtrusionLayer = () => {
  return (
    <AzureMapsProvider>
        <AzureMap
            options={{ ...your_options, center: [-122.1333, 47.637], zoom: 16, pitch: 60 }}
            controls={[
            {
                controlName: 'PitchControl',
                controlOptions: { pitchDegreesDelta: 10 },
                options: { position: 'top-right' } as ControlOptions,
            },
            ]}
        >
            <AzureMapDataSourceProvider id="PolygonExtrusionLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
                type="PolygonExtrusionLayer"
                options={{
                    height: 50,
                    base: 0,
                    fillColor: 'red',
                    fillOpacity: 0.7,
                    translate: [0, 0],
                }}
                />;
            </AzureMapDataSourceProvider>
        </AzureMap>
    </AzureMapsProvider>
  );
};
`,
    },
  },
  args: {
    height: 50,
    base: 0,
    fillColor: 'red',
    fillOpacity: 0.7,
    translate: [0, 0],
  },
};
export default meta;

type Story = StoryObj<typeof PolygonExtrusionLayer>;
export const Example: Story = {};
