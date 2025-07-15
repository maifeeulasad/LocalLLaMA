import React, { lazy, Suspense } from 'react';

const Page1m021nx = lazy(() => import('./Page'));

const LazyPage1m021nx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m021nx />
  </Suspense>
);

export { LazyPage1m021nx };
