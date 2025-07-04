import React, { lazy, Suspense } from 'react';

const Page1lr1i84 = lazy(() => import('./Page'));

const LazyPage1lr1i84 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr1i84 />
  </Suspense>
);

export { LazyPage1lr1i84 };
