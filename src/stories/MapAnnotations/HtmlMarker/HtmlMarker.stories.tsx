import type { Meta, StoryObj } from '@storybook/react';
import HtmlMarker from './HtmlMarker';
import { code } from './code';

const meta: Meta<typeof HtmlMarker> = {
  title: 'Map Annotations/HTML Marker',
  component: HtmlMarker,
  args: {
    color: 'DodgerBlue',
    text: '10',
    position: [0, 0],
  },
  parameters: {
    layout: 'centered',
    storySource: {
      source: code,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HtmlMarker>;

export const Example: Story = {};
