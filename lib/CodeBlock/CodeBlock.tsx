import React, { useState } from 'react';
import { CopyCodeButton } from './CopyCodeButton';
import { OneLiner } from './OneLiner';

export type CodeBlockProps = {
  code: string;
  fileName?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = 'copy to clipboard',
  fileName,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const isSingleLine = !code.includes('\n');

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return isSingleLine ? (
    <OneLiner code={code} onClick={onClick} copied={copied} />
  ) : (
    <div className="w-full max-w-lg">
      <div className="bg-gray-50 rounded-lg dark:bg-gray-700">
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
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
