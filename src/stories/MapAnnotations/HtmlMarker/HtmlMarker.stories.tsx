import type { Meta, StoryObj } from '@storybook/react';
import HtmlMarker from './HtmlMarker';

const meta: Meta<typeof HtmlMarker> = {
  title: 'Map Annotations/HTML Marker',
  component: HtmlMarker,
  args: {
    color: 'DodgerBlue',
    text: '10',
    position: [0, 0],
  },
  parameters: {
    storySource: {
      source: `
import { AzureMap, AzureMapHtmlMarker, AzureMapsProvider } from 'react-azure-maps';
import { HtmlMarkerOptions, SymbolLayerOptions } from 'azure-maps-control';

const HtmlMarker = () => {
  return (
    <AzureMapsProvider>
      <AzureMap options={your_options}>
        <AzureMapHtmlMarker
          options={{
              color: 'DodgerBlue',
              text: '10',
              position: [0, 0],
          }}
        />
      </AzureMap>
    </AzureMapsProvider>
  );
};
`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HtmlMarker>;

export const Example: Story = {};
