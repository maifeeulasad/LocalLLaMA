import React, { lazy, Suspense } from 'react';

const Page1mgm8d3 = lazy(() => import('./Page'));

const LazyPage1mgm8d3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgm8d3 />
  </Suspense>
);

export { LazyPage1mgm8d3 };
