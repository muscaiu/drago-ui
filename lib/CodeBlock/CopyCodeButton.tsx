import React from 'react';

export type CopyCodeButtonProps = {
  copied: boolean;
  onClick: () => void;
};

export const CopyCodeButton: React.FC<CopyCodeButtonProps> = ({
  copied,
  onClick,
}: CopyCodeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex text-gray-900 dark:text-gray-400 m-0.5 hover:text-gray-50 py-2 px-2.5">
      <span
        id="default-message"
        className={`inline-flex items-center ${copied ? 'hidden' : ''}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          className="icon-sm">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
            clipRule="evenodd"></path>
        </svg>
        <span className="ml-1 text-xs font-semibold">Copy code</span>
      </span>
      <span
        id="success-message"
        className={`inline-flex items-center ${copied ? '' : 'hidden'}`}>
        <svg
          className="text-blue-700 dark:text-blue-500"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 12.6111L8.92308 17.5L20 6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-1 text-xs font-semibold text-blue-700 dark:text-blue-500">
          Copied
        </span>
      </span>
    </button>
  );
};
