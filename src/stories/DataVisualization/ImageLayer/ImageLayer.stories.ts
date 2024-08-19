import type { Meta, StoryObj } from '@storybook/react';
import ImageLayer from './ImageLayer';

const meta: Meta<typeof ImageLayer> = {
  title: 'Data Visualization/Image Layer',
  component: ImageLayer,
  parameters: {
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';

const ImageLayer = () => {

  return (
    <AzureMapsProvider>
      <AzureMap options={your_options}>
        <AzureMapDataSourceProvider id="ImageLayer DataSourceProvider">
          <AzureMapLayerProvider
            type="ImageLayer"
            options={{
              url: 'path/to/image',
              // * An array of positions for the corners of the image listed in clockwise order: [top left, top right, bottom right, bottom left].
              coordinates: [
                  [-20, 20],
                  [20, 20],
                  [20, -20],
                  [-20, -20],
              ],
              opacity: 1,
              contrast: 0,
              saturation: 0,
              hueRotation: 0,
              fadeDuration: 300,
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
    opacity: 1,
    contrast: 0,
    saturation: 0,
    hueRotation: 0,
    fadeDuration: 300,
  },
  argTypes: {
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    contrast: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    saturation: { control: { type: 'range', min: -1, max: 1, step: 0.1 } },
    hueRotation: { control: { type: 'range', min: 0, max: 360, step: 1 } },
    fadeDuration: { control: { type: 'range', min: 0, max: 1000, step: 100 } },
  },
};
export default meta;

type Story = StoryObj<typeof ImageLayer>;

export const Example: Story = {};
