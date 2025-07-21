import React, { lazy, Suspense } from 'react';

const Page1m563lh = lazy(() => import('./Page'));

const LazyPage1m563lh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m563lh />
  </Suspense>
);

export { LazyPage1m563lh };
