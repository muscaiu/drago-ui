import React from 'react';
import { CopyCodeButton } from './CopyCodeButton';

export type OneLinerProps = {
  formattedCode: string;
  copied: boolean;
  onClick: () => void;
};

export const OneLiner: React.FC<OneLinerProps> = ({
  formattedCode = 'copy to clipboard',
  onClick,
  copied,
}: OneLinerProps) => {
  return (
    <div className="w-full max-w-lg">
      <div className="relative bg-gray-50 rounded-lg dark:bg-gray-900">
        <div className="overflow-scroll max-h-full text-gray-300 p-2">
          <div
            className="p-1"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 ">
          <CopyCodeButton onClick={onClick} copied={copied} />
        </div>
      </div>
    </div>
  );
};
