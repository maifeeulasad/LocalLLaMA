import React, { lazy, Suspense } from 'react';

const Page1mb4d9y = lazy(() => import('./Page'));

const LazyPage1mb4d9y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb4d9y />
  </Suspense>
);

export { LazyPage1mb4d9y };
