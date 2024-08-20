import type { Meta, StoryObj } from '@storybook/react';
import HeatMapLayer from './HeatMapLayer';

const meta: Meta<typeof HeatMapLayer> = {
  title: 'Data Visualization/Heat Map Layer',
  component: HeatMapLayer,
  parameters: {
    controls: { exclude: ['color'] },
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';

const magWeight = [
  'interpolate',
  ['exponential', 2], //Using an exponential interpolation since earthquake magnitudes are on an exponential scale.
  ['get', 'mag'],
  0,
  0,
  10,
  1,
];

const HeatMapLayer = () => {
  return (
    <AzureMapsProvider>
      <AzureMap options={your_options}>
        <AzureMapDataSourceProvider
          id="LineLayer DataSourceProvider"
          dataFromUrl="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
        >
          <AzureMapLayerProvider
            type="HeatLayer"
            options={{
              radius: 10,
              opacity: 1,
              intensity: 1,
              weight: 1,  // if weight is set true in the Controls, magWeight is used
            }}
          />
        </AzureMapDataSourceProvider>
      </AzureMap>
    </AzureMapsProvider>
  );
};
`,
    },
  },
  args: {
    radius: 10,
    opacity: 1,
    intensity: 1,
    weight: false,
  },
  argTypes: {
    radius: { control: { type: 'range', min: 1, max: 50, step: 1 } },
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    intensity: { control: { type: 'range', min: 0, max: 5, step: 0.1 } },
    weight: { description: 'base on "mag" property' },
  },
};
export default meta;

type Story = StoryObj<typeof HeatMapLayer>;

export const Example: Story = {};
