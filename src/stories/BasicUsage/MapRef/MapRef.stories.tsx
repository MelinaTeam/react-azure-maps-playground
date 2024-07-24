import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AzureMapsProvider } from 'react-azure-maps';
import MapRef from './MapRef';
import { code } from './code';

const meta: Meta<typeof MapRef> = {
  title: 'Basic Usage/MapRef',
  component: MapRef,
  render: ({ ...args }) => (
    <AzureMapsProvider>
      <MapRef {...args} />
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

type Story = StoryObj<typeof MapRef>;

export const MapRefExample: Story = {
  args: {
    showTileBoundaries: true,
    mapCenter: { longitude: 120, latitude: 23.5 },
  },
};
