import type { Meta, StoryObj } from '@storybook/react';
import MapControl from './MapControl';
import { ControlOptions } from 'react-azure-maps';
import { ControlPosition } from 'azure-maps-control';

const meta: Meta<typeof MapControl> = {
  title: 'Basic Usage/Map Controls',
  render: ({ ...args }) => <MapControl {...args} />,
  component: MapControl,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof MapControl>;

export const StyleControl: Story = {
  name: 'Style Control',
  args: {
    controlName: 'StyleControl',
    controlOptions: { mapStyles: 'all' },
    position: 'top-right' as ControlPosition,
  },
};
export const ZoomControl: Story = {
  name: 'Zoom Control',
  args: {
    controlName: 'ZoomControl',
    position: 'top-right' as ControlPosition,
  },
};
export const CompassControl: Story = {
  name: 'Compass Control',
  args: {
    controlName: 'CompassControl',
    controlOptions: { rotationDegreesDelta: 10, style: 'dark' },
    position: 'top-right' as ControlPosition,
  },
};
export const PitchControl: Story = {
  name: 'Pitch Control',
  args: {
    controlName: 'PitchControl',
    controlOptions: { pitchDegreesDelta: 5, style: 'dark' },
    position: 'top-right' as ControlPosition,
  },
};
export const TrafficControl: Story = {
  name: 'Traffic Control',
  args: {
    controlName: 'TrafficControl',
    controlOptions: { incidents: true },
    position: 'top-right' as ControlPosition,
  },
  // {
  //   controlName: 'TrafficLegendControl',
  //   controlOptions: {},
  //   options: { position: 'bottom-left' } as ControlOptions,
  // },
};
