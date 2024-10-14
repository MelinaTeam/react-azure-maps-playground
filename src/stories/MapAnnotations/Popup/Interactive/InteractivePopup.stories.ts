import type { Meta, StoryObj } from '@storybook/react';
import InteractivePopup from './InteractivePopupExample';

const meta: Meta<typeof InteractivePopup> = {
  title: 'Map Annotations/Interactive Popup',
  component: InteractivePopup,
  args: {
    isVisible: true,
    options: {
      position: [0, 0],
    },
  },
  parameters: {
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapPopup, IAzureMapPopup } from 'react-azure-maps';

const Popup = () => {

  return (
    <AzureMapsProvider>
      <AzureMap options={your_options}>
        <AzureMapPopup
          isVisible
          options={{ position: [0, 0] }}
          popupContent={<div style={{ padding: '20px' }}>Hello World</div>}
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

type Story = StoryObj<typeof InteractivePopup>;

export const Example: Story = {};
