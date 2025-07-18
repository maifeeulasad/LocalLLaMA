import React, { lazy, Suspense } from 'react';

const Page1m301uy = lazy(() => import('./Page'));

const LazyPage1m301uy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m301uy />
  </Suspense>
);

export { LazyPage1m301uy };
