import type { Meta, StoryObj } from '@storybook/react';
import MapStyles from './MapStyles';

const meta: Meta<typeof MapStyles> = {
  title: 'Basic Usage/Map Styles',
  component: MapStyles,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof MapStyles>;
export const Example: Story = {
  args: {
    showLabels: true,
    showLogo: true,
    renderWorldCopies: true,
  },
};
