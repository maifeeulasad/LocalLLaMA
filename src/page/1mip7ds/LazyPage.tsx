import React, { lazy, Suspense } from 'react';

const Page1mip7ds = lazy(() => import('./Page'));

const LazyPage1mip7ds = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mip7ds />
  </Suspense>
);

export { LazyPage1mip7ds };
