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
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Example: Story = {};
