import React, { lazy, Suspense } from 'react';

const Page1m641zg = lazy(() => import('./Page'));

const LazyPage1m641zg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m641zg />
  </Suspense>
);

export { LazyPage1m641zg };
