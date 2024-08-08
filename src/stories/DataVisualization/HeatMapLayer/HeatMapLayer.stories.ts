import type { Meta, StoryObj } from '@storybook/react';
import HeatMapLayer from './HeatMapLayer';

const meta: Meta<typeof HeatMapLayer> = {
  title: 'Data Visualization/Heat Map Layer',
  component: HeatMapLayer,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['color'] },
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
