import React, { lazy, Suspense } from 'react';

const Page1mbs4dw = lazy(() => import('./Page'));

const LazyPage1mbs4dw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbs4dw />
  </Suspense>
);

export { LazyPage1mbs4dw };
