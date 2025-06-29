import React, { lazy, Suspense } from 'react';

const Page1lmmvmj = lazy(() => import('./Page'));

const LazyPage1lmmvmj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmmvmj />
  </Suspense>
);

export { LazyPage1lmmvmj };
