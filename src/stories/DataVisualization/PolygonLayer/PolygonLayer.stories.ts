import type { Meta, StoryObj } from '@storybook/react';
import PolygonLayer from './PolygonLayer';

const meta: Meta<typeof PolygonLayer> = {
  title: 'Data Visualization/Polygon Layer',
  component: PolygonLayer,
  parameters: {
    layout: 'centered',
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';

const collection = new atlas.data.Polygon([
  [
    [-15.82031, 2.46018],
    [14.0625, 30.14512],
    [40.78125, 2.81137],
    [12.30468, 65.21989],
    [-15.82031, 2.46018],
  ],
]);

const PolygonLayer = () => {

  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={{ ...mapOptions, center: [12, 39], zoom: 0 }}>
          <AzureMapDataSourceProvider id="PolygonLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider type="PolygonLayer"  
                                   options={{ fillColor: 'rgba(0, 0, 255, 0.5)', fillOpacity: 0.8, }} />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default PolygonLayer;
`,
    },
  },
  args: {
    fillColor: 'rgba(0, 0, 255, 0.5)',
    fillOpacity: 0.8,
  },
  argTypes: {
    fillOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
  },
};

export default meta;

export const Example: StoryObj<typeof PolygonLayer> = {};
