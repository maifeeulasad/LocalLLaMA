import React, { lazy, Suspense } from 'react';

const Page1mf3mhi = lazy(() => import('./Page'));

const LazyPage1mf3mhi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf3mhi />
  </Suspense>
);

export { LazyPage1mf3mhi };
