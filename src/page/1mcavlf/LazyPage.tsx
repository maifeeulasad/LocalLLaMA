import React, { lazy, Suspense } from 'react';

const Page1mcavlf = lazy(() => import('./Page'));

const LazyPage1mcavlf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcavlf />
  </Suspense>
);

export { LazyPage1mcavlf };
