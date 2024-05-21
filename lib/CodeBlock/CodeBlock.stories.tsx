import type { Meta, StoryObj } from '@storybook/react';

import { CodeBlock, CodeBlockProps } from './CodeBlock';

const meta: Meta<CodeBlockProps> = {
  title: 'Drago-UI/CodeBlock',
  component: CodeBlock,
};

export default meta;
type Story = StoryObj<CodeBlockProps>;

export const Oneliner: Story = (args: CodeBlockProps) => (
  <CodeBlock {...args} />
);
Oneliner.args = {
  text: 'pnpm install drago-ui',
};

export const MultiRow: Story = (args: CodeBlockProps) => (
  <CodeBlock {...args} />
);
MultiRow.args = {
  text: `
  import { Button, Card } from 'drago-ui';
  import 'drago-ui/dist/style.css';
  `,
};

export const FileName: Story = (args: CodeBlockProps) => (
  <CodeBlock {...args} />
);
FileName.args = {
  fileName: 'App.tsx',
  text: `
  import { Button, Card } from 'drago-ui';
  import 'drago-ui/dist/style.css';
  `,
};
