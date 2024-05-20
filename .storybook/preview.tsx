import React from 'react';
import type { Preview } from '@storybook/react';
// import { themes, ensure } from '@storybook/theming';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';

import '../lib/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          {/* <h1>Drago-UI</h1> */}
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
      toc: true,
      // theme: ensure(themes.dark),
    },
  },
  tags: ['autodocs'],
};

export default preview;
