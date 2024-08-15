import type { Meta, StoryObj } from '@storybook/react';
import SymbolLayer from './SymbolLayer';

const meta: Meta<typeof SymbolLayer> = {
  title: 'Data Visualization/Symbol Layer',
  component: SymbolLayer,
  parameters: {},
  args: {
    image: 'pin-round-blue',
    optionsSize: 1.3,
    optionsAnchor: 'center',
    optionsOffset: [0, 0],
  },
};
export default meta;

type Story = StoryObj<typeof SymbolLayer>;

export const IconOptions: Story = {
  parameters: {
    controls: { exclude: ['font', 'textSize', 'textOffset', 'textAnchor', 'color', 'haloColor', 'haloWidth'] },
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';

const collection = generateRandomPoints();

const SymbolLayer = () => {

  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={your_options}>
          <AzureMapDataSourceProvider id="SymbolLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
              type="SymbolLayer"
              options={{
                iconOptions: {
                  image: 'pin-round-blue',
                  size: 1.3,
                  anchor: 'center',
                  offset: [0, 0],
                },
                textOptions: {
                  textField: ['get', 'title'],
                },
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
  argTypes: {
    image: {
      control: { type: 'select' },
      options: [
        'marker-black',
        'marker-blue',
        'marker-darkblue',
        'marker-red',
        'marker-yellow',
        'pin-blue',
        'pin-darkblue',
        'pin-red',
        'pin-round-blue',
        'pin-round-darkblue',
        'pin-round-red',
      ],
    },
    optionsSize: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    optionsAnchor: {
      control: { type: 'select' },
      options: ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
  },
};

export const TextOptions: Story = {
  parameters: {
    controls: { exclude: ['image', 'opacity', 'optionsSize', 'optionsAnchor', 'optionsOffset'] },
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import atlas from 'azure-maps-control';

const collection = generateRandomPoints();

const SymbolLayer = () => {

  return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={your_options}>
          <AzureMapDataSourceProvider id="SymbolLayer DataSourceProvider" collection={collection}>
            <AzureMapLayerProvider
              type="SymbolLayer"
              options={{
                iconOptions: {
                  image: 'pin-round-blue',
                  size: 1.3,
                  anchor: 'center',
                  offset: [0, 0],
                },
                textOptions: {
                  textField: ['get', 'title'],
                  size: 12,
                  offset: [0, 2],
                  anchor: 'center',
                  color: 'black',
                  haloColor: 'white',
                  haloWidth: 1
                },
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
    font: 'StandardFont-Bold',
    textSize: 12,
    textOffset: [0, 2],
    textAnchor: 'center',
    color: 'black',
    haloColor: 'white',
    haloWidth: 1,
  },
  argTypes: {
    font: { control: { type: 'select' }, options: ['SegoeUi-Bold', 'SegoeUi-Regular', 'SegoeUi-Light'] },
    textSize: { name: 'size', control: { type: 'range', min: 0, max: 25, step: 1 } },
    textOffset: { name: 'offset' },
    textAnchor: {
      name: 'anchor',
      control: { type: 'select' },
      options: ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    color: { control: { type: 'color' } },
    haloColor: { control: { type: 'color' } },
    haloWidth: { control: { type: 'range', min: 0, max: 15, step: 0.5 } },
  },
};
