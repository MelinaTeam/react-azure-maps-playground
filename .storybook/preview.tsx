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
    decorators: [
      (Story) => (
        <div style={{ margin: '3em' }}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
