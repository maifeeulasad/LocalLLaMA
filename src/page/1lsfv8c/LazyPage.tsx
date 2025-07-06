import React, { lazy, Suspense } from 'react';

const Page1lsfv8c = lazy(() => import('./Page'));

const LazyPage1lsfv8c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsfv8c />
  </Suspense>
);

export { LazyPage1lsfv8c };
