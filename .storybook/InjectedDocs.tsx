import React from 'react';
import { Source } from '@storybook/blocks';

const InjectedDocs = () => {
  return (
    <Source
      code={`import { Component } from 'drago-ui';
import 'drago-ui/dist/style.css'; //in layout`}
      language="jsx"
    />
  );
};

export default InjectedDocs;
