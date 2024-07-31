import type { Meta, StoryObj } from '@storybook/react';
import DefaultMap from './DefaultMap';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { code } from './code';

const meta: Meta<typeof DefaultMap> = {
  title: 'Basic Usage/DefaultMap',
  component: DefaultMap,
  tags: ['autodocs'],
  render: () => <DefaultMap />,
  parameters: {
    layout: 'centered',
    storySource: {
      source: code, //Put your code here
    },
  },
};
export default meta;

type Story = StoryObj<typeof DefaultMap>;

export const Example: Story = {};
