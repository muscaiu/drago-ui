import React from 'react';
import { CopyCodeButton } from './CopyCodeButton';

export type OneLinerProps = {
  code: string;
  copied: boolean;
  onClick: () => void;
};

export const OneLiner: React.FC<OneLinerProps> = ({
  code = 'copy to clipboard',
  onClick,
  copied,
}: OneLinerProps) => {
  return (
    <div className="w-full max-w-lg">
      <div className="relative p-2 bg-gray-50 rounded-lg dark:bg-gray-700 max-h-64">
        <div className="overflow-scroll max-h-full text-gray-300 p-2">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 ">
          <CopyCodeButton onClick={onClick} copied={copied} />
        </div>
      </div>
    </div>
  );
};
