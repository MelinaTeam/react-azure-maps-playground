import type { Meta, StoryObj } from '@storybook/react';
import BubbleLayer from './BubbleLayer';
import { code } from './code';

const meta: Meta<typeof BubbleLayer> = {
  title: 'Data Visualization/Bubble Layer',
  component: BubbleLayer,
  parameters: {
    layout: 'centered',
    storySource: {
      source: code,
    },
  },
  args: {
    radius: 10,
    color: 'DodgerBlue',
    opacity: 1,
    strokeColor: 'DarkBlue',
    strokeWidth: 2,
    strokeOpacity: 1,
    blur: 0,
  },
  argTypes: {
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    strokeWidth: { control: { type: 'range', min: 0, max: 10, step: 1 } },
    strokeOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    blur: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  },
};
export default meta;

type Story = StoryObj<typeof BubbleLayer>;

export const Example: Story = {
  name: 'Example',
  args: {},
};
