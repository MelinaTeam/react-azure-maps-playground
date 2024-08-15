import type { Meta, StoryObj } from '@storybook/react';
import Popup from './Popup';

const meta: Meta<typeof Popup> = {
  title: 'Map Annotations/Popup',
  component: Popup,
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
      <div className="defaultMap">
        <AzureMap options={your_options}>
          <AzureMapPopup
            isVisible
            options={{ position: [0, 0] }}
            popupContent={<div style={{ padding: '20px' }}>Hello World</div>}
          />
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};
`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Example: Story = {};
