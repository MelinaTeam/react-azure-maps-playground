import type { Meta, StoryObj } from '@storybook/react';
import LineLayer from './LineLayer';

const meta: Meta<typeof LineLayer> = {
  title: 'Data Visualization/Line Layer',
  component: LineLayer,
  parameters: {
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';

// create a line string for the data source
const collection = new atlas.data.LineString([
  [-74.0039, 40.88029],
  [-87.583, 41.93497],
  [-105.20507, 39.77476],
  [-122.43164, 47.66538],
]);

const LineLayer = () => {
  return (
    <AzureMapsProvider>
    <div className="defaultMap">
    <AzureMap options={your_options}>
        <AzureMapDataSourceProvider id="LineLayer DataSourceProvider" collection={collection}>
        <AzureMapLayerProvider
            type="LineLayer"
            options={{
            strokeColor,
            strokeWidth,
            strokeOpacity,
            blur,
            lineCap,
            translate,
            }}
        />
        </AzureMapDataSourceProvider>
    </AzureMap>
    </div>
    </AzureMapsProvider>
  );
};
`,
    },
  },
  args: {
    strokeColor: 'DodgerBlue',
    strokeWidth: 4,
    strokeOpacity: 1,
    blur: 0,
    lineCap: 'round',
    translate: [0, 0],
  },
  argTypes: {
    strokeWidth: { control: { type: 'range', min: 0, max: 25, step: 1 } },
    strokeOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    blur: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    lineCap: { control: { type: 'select' }, options: ['butt', 'round', 'square'] },
  },
};
export default meta;

type Story = StoryObj<typeof LineLayer>;

export const Example: Story = {};
