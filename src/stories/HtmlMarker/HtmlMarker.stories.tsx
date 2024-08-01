import type { Meta, StoryObj } from '@storybook/react';
import HtmlMarker from './HtmlMarker';

const meta: Meta<typeof HtmlMarker> = {
  title: 'HTML Marker',
  component: HtmlMarker,
  args: {
    color: 'DodgerBlue',
    text: '10',
    position: [0, 0],
  },
};

export default meta;

type Story = StoryObj<typeof HtmlMarker>;

export const Example: Story = {};
