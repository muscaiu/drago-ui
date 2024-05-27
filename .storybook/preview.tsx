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

// import InjectedDocs from './InjectedDocs';
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
          {/* <InjectedDocs /> */}
          <Stories />
        </>
      ),
      toc: true,
    },
    options: {
      storySort: {
        method: '',
        order: ['Drago-UI', ['Button', 'Input', 'Form', 'CodeBlock']],
        locales: '',
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
