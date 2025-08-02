import React, { lazy, Suspense } from 'react';

const Page1mfn2xf = lazy(() => import('./Page'));

const LazyPage1mfn2xf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfn2xf />
  </Suspense>
);

export { LazyPage1mfn2xf };
