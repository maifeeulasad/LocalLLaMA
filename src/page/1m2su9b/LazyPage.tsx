import React, { lazy, Suspense } from 'react';

const Page1m2su9b = lazy(() => import('./Page'));

const LazyPage1m2su9b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2su9b />
  </Suspense>
);

export { LazyPage1m2su9b };
