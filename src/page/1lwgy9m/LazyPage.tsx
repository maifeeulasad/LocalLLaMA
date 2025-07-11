import React, { lazy, Suspense } from 'react';

const Page1lwgy9m = lazy(() => import('./Page'));

const LazyPage1lwgy9m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwgy9m />
  </Suspense>
);

export { LazyPage1lwgy9m };
