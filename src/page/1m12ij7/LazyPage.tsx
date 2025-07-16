import React, { lazy, Suspense } from 'react';

const Page1m12ij7 = lazy(() => import('./Page'));

const LazyPage1m12ij7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m12ij7 />
  </Suspense>
);

export { LazyPage1m12ij7 };
