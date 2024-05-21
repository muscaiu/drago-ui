import React, { useState } from 'react';
import { CopyCodeButton } from './CopyCodeButton';
import { OneLiner } from './OneLiner';

export type CodeBlockProps = {
  text: string;
  fileName?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  text = 'copy to clipboard',
  fileName,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const isSingleLine = !text.includes('\n');

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return isSingleLine ? (
    <OneLiner text={text} onClick={onClick} copied={copied} />
  ) : (
    <div className="w-full max-w-lg">
      <div className="bg-gray-50 rounded-lg dark:bg-gray-700 max-h-64">
        <div className="flex justify-between items-center text-gray-900 dark:text-gray-400 dark:bg-gray-800 rounded-t-lg py-2 px-2.5">
          {fileName ? (
            <span className="text-xs font-semibold text-gray-900 dark:text-gray-400">
              {fileName}
            </span>
          ) : (
            <span />
          )}
          <CopyCodeButton onClick={onClick} copied={copied} />
        </div>
        <div className="overflow-scroll max-h-full text-gray-300 p-2">
          <pre>
            <code>{text}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
