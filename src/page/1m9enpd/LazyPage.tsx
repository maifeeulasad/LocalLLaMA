import React, { lazy, Suspense } from 'react';

const Page1m9enpd = lazy(() => import('./Page'));

const LazyPage1m9enpd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9enpd />
  </Suspense>
);

export { LazyPage1m9enpd };
