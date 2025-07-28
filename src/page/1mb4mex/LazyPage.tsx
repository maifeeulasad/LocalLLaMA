import React, { lazy, Suspense } from 'react';

const Page1mb4mex = lazy(() => import('./Page'));

const LazyPage1mb4mex = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb4mex />
  </Suspense>
);

export { LazyPage1mb4mex };
