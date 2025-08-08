import React, { lazy, Suspense } from 'react';

const Page1mk8d3j = lazy(() => import('./Page'));

const LazyPage1mk8d3j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk8d3j />
  </Suspense>
);

export { LazyPage1mk8d3j };
