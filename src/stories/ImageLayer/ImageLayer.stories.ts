import type { Meta, StoryObj } from '@storybook/react';
import ImageLayer from './ImageLayer';

const meta: Meta<typeof ImageLayer> = {
  title: 'Image Layer',
  component: ImageLayer,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof ImageLayer>;

export const Example: Story = {};
