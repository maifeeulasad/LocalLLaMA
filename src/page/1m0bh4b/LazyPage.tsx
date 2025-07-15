import React, { lazy, Suspense } from 'react';

const Page1m0bh4b = lazy(() => import('./Page'));

const LazyPage1m0bh4b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0bh4b />
  </Suspense>
);

export { LazyPage1m0bh4b };
