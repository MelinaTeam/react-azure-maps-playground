import React from 'react';
import type { Preview } from '@storybook/react';
import 'azure-maps-control/dist/atlas.min.css';
import { Story, Canvas } from '@storybook/addon-docs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
