import React from 'react';
import type { Preview } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
// import { themes, ensure } from '@storybook/theming';

import CodeBlock from './CodeBlock';
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
      components: {
        code: CodeBlock,
      },
      // theme: ensure(themes.light),
    },
    options: {
      storySort: {
        method: '',
        order: ['Drago-UI', ['Button', 'Input', 'CopyToClipboard']],
        locales: '',
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
