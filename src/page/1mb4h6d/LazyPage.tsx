import React, { lazy, Suspense } from 'react';

const Page1mb4h6d = lazy(() => import('./Page'));

const LazyPage1mb4h6d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb4h6d />
  </Suspense>
);

export { LazyPage1mb4h6d };
