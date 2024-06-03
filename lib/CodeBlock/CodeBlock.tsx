import React, { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

import { CopyCodeButton } from './CopyCodeButton';
import { OneLiner } from './OneLiner';

export type CodeBlockProps = {
  code: string;
  fileName?: string;
  language?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = 'copy to clipboard',
  fileName,
  language = 'javascript',
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [formattedCode, setFormattedCode] = useState('');

  const isSingleLine = !code.includes('\n');

  useEffect(() => {
    const fetchFormattedCode = async () => {
      const html = await codeToHtml(code, {
        lang: language,
        defaultColor: 'dark',
        themes: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
        // decorations: [
        //   {
        //     start: { line: 0, character: 0 },
        //     end: { line: 0, character: 4 },
        //     properties: { class: 'bg-red-700' },
        //   },
        // ],
      });
      setFormattedCode(html);
    };

    fetchFormattedCode();
  }, [code, language]);

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
    <OneLiner formattedCode={formattedCode} onClick={onClick} copied={copied} />
  ) : (
    <div className="w-full">
      <div className="bg-gray-50 rounded-lg dark:bg-code-dark">
        <div className="flex justify-between items-center text-gray-900 dark:text-gray-400 dark:bg-gray-800 rounded-t-lg px-2.5">
          {fileName ? (
            <span className="rounded-lg px-2.5 text-xs font-semibold text-gray-900 dark:text-gray-400">
              {fileName}
            </span>
          ) : (
            <span />
          )}
          <CopyCodeButton onClick={onClick} copied={copied} />
        </div>
        <div className="overflow-scroll max-h-full">
          <div
            className="p-2"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          />
        </div>
      </div>
    </div>
  );
};
