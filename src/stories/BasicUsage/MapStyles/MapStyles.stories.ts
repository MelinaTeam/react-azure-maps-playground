import type { Meta, StoryObj } from '@storybook/react';
import MapStyles from './MapStyles';

const meta: Meta<typeof MapStyles> = {
  title: 'Basic Usage/Map Styles',
  component: MapStyles,
  parameters: {
    layout: 'centered',
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider } from 'react-azure-maps';

const MapStyles = () => {

  return (
    <AzureMapsProvider>
    <div className="defaultMap">
      <AzureMap
        options={your_options}
        styleOptions={{
          showLabels={true},
          showLogo={true},
          renderWorldCopies={true},
        }}
      ></AzureMap>
    </div>
    </AzureMapsProvider>
  );
};
`,
    },
  },
};
export default meta;

type Story = StoryObj<typeof MapStyles>;
export const Example: Story = {
  args: {
    showLabels: true,
    showLogo: true,
    renderWorldCopies: true,
    showFeedbackLink: true,
  },
};
