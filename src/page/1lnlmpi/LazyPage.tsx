import React, { lazy, Suspense } from 'react';

const Page1lnlmpi = lazy(() => import('./Page'));

const LazyPage1lnlmpi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnlmpi />
  </Suspense>
);

export { LazyPage1lnlmpi };
