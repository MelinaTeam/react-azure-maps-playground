import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AzureMapsProvider } from 'react-azure-maps';
import { MapControl } from './MapControl';
import { code } from './code';

const meta: Meta<typeof MapControl> = {
  title: 'Example/MapControl',
  component: MapControl,
  render: ({ ...args }) => (
    <AzureMapsProvider>
      <MapControl {...args} />
    </AzureMapsProvider>
  ),
  parameters: {
    layout: 'centered',
    storySource: {
      source: code,
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof MapControl>;

export const MapControlExample: Story = {
  args: {
    showTileBoundaries: true,
    mapCenter: { longitude: 120, latitude: 23.5 },
  },
};
