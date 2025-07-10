import React, { lazy, Suspense } from 'react';

const Page1lw5oco = lazy(() => import('./Page'));

const LazyPage1lw5oco = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw5oco />
  </Suspense>
);

export { LazyPage1lw5oco };
