import type { Meta, StoryObj } from '@storybook/react';

import { CopyToClipboard, CopyToClipboardProps } from './CopyToClipboard';

const meta: Meta<CopyToClipboardProps> = {
  title: 'Drago-UI/CopyToClipboard',
  component: CopyToClipboard,
};

export default meta;
type Story = StoryObj<CopyToClipboardProps>;

export const Oneliner: Story = (args: CopyToClipboardProps) => (
  <CopyToClipboard {...args} />
);
Oneliner.args = {
  textToCopy: 'copy to clipboard',
};
