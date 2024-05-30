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
      className="inline-flex text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5">
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
            fill-rule="evenodd"
            d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
            clip-rule="evenodd"></path>
        </svg>
        <span className="ml-1 text-xs font-semibold">Copy code</span>
      </span>
      <span
        id="success-message"
        className={`inline-flex items-center ${copied ? '' : 'hidden'}`}>
        <svg
          className="text-blue-700 dark:text-blue-500 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 16 12">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
          Copied
        </span>
      </span>
    </button>
  );
};
