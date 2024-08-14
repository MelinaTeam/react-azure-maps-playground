import type { Meta, StoryObj } from '@storybook/react';
import LineLayer from './LineLayer';
import { code } from './code';

const meta: Meta<typeof LineLayer> = {
  title: 'Data Visualization/Line Layer',
  component: LineLayer,
  parameters: {
    layout: 'centered',
    storySource: {
      source: code,
    },
  },
  args: {
    strokeColor: 'DodgerBlue',
    strokeWidth: 4,
    strokeOpacity: 1,
    blur: 0,
    lineCap: 'round',
    translate: [0, 0],
  },
  argTypes: {
    strokeWidth: { control: { type: 'range', min: 0, max: 25, step: 1 } },
    strokeOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    blur: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    lineCap: { control: { type: 'select' }, options: ['butt', 'round', 'square'] },
  },
};
export default meta;

type Story = StoryObj<typeof LineLayer>;

export const Example: Story = {};
