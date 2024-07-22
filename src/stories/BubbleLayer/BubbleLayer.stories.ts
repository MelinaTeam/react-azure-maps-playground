import type { Meta, StoryObj } from '@storybook/react';
import BubbleLayer from './BubbleLayer';
import { code } from './code';

const meta: Meta<typeof BubbleLayer> = {
  title: 'Example/BubbleLayer',
  component: BubbleLayer,
  parameters: {
    layout: 'centered',
    storySource: {
      source: code,
    },
  },
};
export default meta;

type Story = StoryObj<typeof BubbleLayer>;

export const ShowColors: Story = {
  args: {
    showBasicBubble: true,
    showNumbers: false,
    useFilter: false,
  },
};
export const ShowNumbers: Story = {
  args: {
    showBasicBubble: true,
    showNumbers: true,
    useFilter: false,
  },
};
export const ShowLandmark: Story = {
  args: {
    showBasicBubble: true,
    showNumbers: true,
    useFilter: true,
  },
};
