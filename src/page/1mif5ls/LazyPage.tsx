import React, { lazy, Suspense } from 'react';

const Page1mif5ls = lazy(() => import('./Page'));

const LazyPage1mif5ls = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mif5ls />
  </Suspense>
);

export { LazyPage1mif5ls };
