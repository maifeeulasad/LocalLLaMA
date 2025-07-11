import React, { lazy, Suspense } from 'react';

const Page1lwx77q = lazy(() => import('./Page'));

const LazyPage1lwx77q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwx77q />
  </Suspense>
);

export { LazyPage1lwx77q };
