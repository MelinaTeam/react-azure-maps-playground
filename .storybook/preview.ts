import type { Preview } from '@storybook/react';
import 'azure-maps-control/dist/atlas.min.css';

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
