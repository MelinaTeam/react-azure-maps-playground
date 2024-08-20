import React from 'react';
import type { Preview } from '@storybook/react';
import 'azure-maps-control/dist/atlas.min.css';
import '../src/Storybook.css';
import { Story, Canvas } from '@storybook/addon-docs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Basic Usage',
          ['*', 'Map Reference'],
          'Map Annotations',
          '*',
          'Data Visualization',
          ['Introduction'],
          'Events',
          ['Map Events'],
        ],
      },
    },
  },
};

export default preview;
