import React, { lazy, Suspense } from 'react';

const Page1d3sf1k = lazy(() => import('./Page'));

const LazyPage1d3sf1k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1d3sf1k />
  </Suspense>
);

export { LazyPage1d3sf1k };
