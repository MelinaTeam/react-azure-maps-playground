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
        ],
      },
    },
    // decorators: [
    //   (Story) => (
    //     <div style={{ margin: '3em' }}>
    //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //       <Story />
    //     </div>
    //   ),
    // ],
  },
};

export default preview;
