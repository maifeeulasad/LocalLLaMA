import React, { lazy, Suspense } from 'react';

const Page1lmpd8j = lazy(() => import('./Page'));

const LazyPage1lmpd8j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmpd8j />
  </Suspense>
);

export { LazyPage1lmpd8j };
