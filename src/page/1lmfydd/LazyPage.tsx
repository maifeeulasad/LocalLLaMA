import React, { lazy, Suspense } from 'react';

const Page1lmfydd = lazy(() => import('./Page'));

const LazyPage1lmfydd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmfydd />
  </Suspense>
);

export { LazyPage1lmfydd };
