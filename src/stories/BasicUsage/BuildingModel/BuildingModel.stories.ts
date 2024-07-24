import type { Meta, StoryObj } from '@storybook/react';
import BuildingModel from './BuildingModel';

const meta: Meta<typeof BuildingModel> = {
  title: 'Basic Usage/BuildingModel',
  component: BuildingModel,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof BuildingModel>;
export const Example: Story = {
  args: {
    showBuildingModels: true,
  },
};
