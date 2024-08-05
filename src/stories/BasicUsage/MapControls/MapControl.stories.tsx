import type { Meta, StoryObj } from '@storybook/react';
import MapControl from './MapControl';
import { ControlOptions } from 'react-azure-maps';

const meta: Meta<typeof MapControl> = {
  title: 'Basic Usage/Map Controls',
  render: ({ ...args }) => <MapControl {...args} />,
  component: MapControl,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof MapControl>;

export const StyleControl: Story = {
  name: 'Style Control',
  args: {
    controls: [
      {
        controlName: 'StyleControl',
        controlOptions: { mapStyles: 'all' },
        options: { position: 'top-right' } as ControlOptions,
      },
    ],
  },
};
export const ZoomControl: Story = {
  name: 'Zoom Control',
  args: {
    controls: [
      {
        controlName: 'ZoomControl',
        options: { position: 'top-right' } as ControlOptions,
      },
    ],
  },
};
export const CompassControl: Story = {
  name: 'Compass Control',
  args: {
    controls: [
      {
        controlName: 'CompassControl',
        controlOptions: { rotationDegreesDelta: 10, style: 'dark' },
        options: { position: 'bottom-right' } as ControlOptions,
      },
    ],
  },
};
export const PitchControl: Story = {
  name: 'Pitch Control',
  args: {
    controls: [
      {
        controlName: 'PitchControl',
        controlOptions: { pitchDegreesDelta: 5, style: 'dark' },
        options: { position: 'bottom-right' } as ControlOptions,
      },
    ],
  },
};
export const TrafficControl: Story = {
  name: 'Traffic Control',
  args: {
    controls: [
      {
        controlName: 'TrafficControl',
        controlOptions: { incidents: true },
        options: { position: 'top-left' } as ControlOptions,
      },
      {
        controlName: 'TrafficLegendControl',
        controlOptions: {},
        options: { position: 'bottom-left' } as ControlOptions,
      },
    ],
  },
};
