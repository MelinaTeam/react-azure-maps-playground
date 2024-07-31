import type { Meta, StoryObj } from '@storybook/react';
import HtmlMarker from './HtmlMarker';

const meta: Meta<typeof HtmlMarker> = {
  title: 'Data Visualization/Html Marker',
  component: HtmlMarker,
};

export default meta;

type Story = StoryObj<typeof HtmlMarker>;

export const Basic: Story = {};
