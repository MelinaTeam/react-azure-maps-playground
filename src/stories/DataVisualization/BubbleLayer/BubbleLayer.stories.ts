import type { Meta, StoryObj } from '@storybook/react';
import BubbleLayer from './BubbleLayer';
import { code } from './code';

const meta: Meta<typeof BubbleLayer> = {
  title: 'Data Visualization/Bubble Layer',
  component: BubbleLayer,
  // tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    storySource: {
      source: code,
    },
  },
};
export default meta;

type Story = StoryObj<typeof BubbleLayer>;

export const Basic: Story = {
  name: 'Basic Bubble Layer',
  args: {
    showBasicBubble: true,
    showNumbers: false,
  },
};
export const Numbers: Story = {
  name: 'Add numbers',
  args: {
    showBasicBubble: true,
    showNumbers: true,
  },
};
