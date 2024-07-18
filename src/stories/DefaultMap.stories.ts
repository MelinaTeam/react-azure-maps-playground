import type { Meta, StoryObj } from '@storybook/react';

import DefaultMap from '../examples/DefaultMap';

const meta: Meta<typeof DefaultMap> = {
  title: 'Example/DefaultMap',
  component: DefaultMap,
  tags: ['autodocs'],
  parameters: {
    // layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof DefaultMap>;
export const DefaultMapExample: Story = {};
