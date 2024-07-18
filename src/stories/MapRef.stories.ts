import type { Meta, StoryObj } from '@storybook/react';

import MapWrapper from '../examples/MapRef/MapWrapper';

const meta: Meta<typeof MapWrapper> = {
  title: 'Example/MapWrapper',
  component: MapWrapper,
  parameters: {
    // layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof MapWrapper>;
export const MapWrapperExample: Story = {};
