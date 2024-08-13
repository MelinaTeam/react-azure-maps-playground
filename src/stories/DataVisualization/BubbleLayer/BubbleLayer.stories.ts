import type { Meta, StoryObj } from '@storybook/react';
import BubbleLayer from './BubbleLayer';

const meta: Meta<typeof BubbleLayer> = {
  title: 'Data Visualization/Bubble Layer',
  component: BubbleLayer,
  parameters: {
    layout: 'centered',
    storySource: {
      source: `import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas, { BubbleLayerOptions } from 'azure-maps-control';

// Generate random points to build the data source for the BubbleLayer.
const collection = generateRandomPoints(); 

const BubbleLayer = () => {
  <AzureMapsProvider>
  <div className="defaultMap">
  <AzureMap options={your_options}>

    <AzureMapDataSourceProvider 
      id="BubbleLayer DataSourceProvider" 
      collection={collection}>
      <AzureMapLayerProvider
        type="BubbleLayer"
        options={{
          radius: 10,
          color: 'DodgerBlue',
          opacity: 1,
          strokeColor: 'DarkBlue',
          strokeWidth: 2,
          strokeOpacity: 1,
          blur: 0,
        }}
      />
    </AzureMapDataSourceProvider>

  </AzureMap>
  </div>
  </AzureMapsProvider>
  );
};

function generateRandomPoints() {
  var layerData = [];

  for (var i = 0; i < 50; i++) {
    layerData.push(
      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {
        title: 'Pin_' + i,
      }),
    );
  }

  return layerData;
}

`,
    },
  },
  args: {
    radius: 10,
    color: 'DodgerBlue',
    opacity: 1,
    strokeColor: 'DarkBlue',
    strokeWidth: 2,
    strokeOpacity: 1,
    blur: 0,
  },
  argTypes: {
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    strokeWidth: { control: { type: 'range', min: 0, max: 10, step: 1 } },
    strokeOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    blur: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  },
};
export default meta;

type Story = StoryObj<typeof BubbleLayer>;

export const Example: Story = {
  name: 'Example',
  args: {},
};
