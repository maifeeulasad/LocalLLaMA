import React, { lazy, Suspense } from 'react';

const Page1mhc31j = lazy(() => import('./Page'));

const LazyPage1mhc31j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhc31j />
  </Suspense>
);

export { LazyPage1mhc31j };
