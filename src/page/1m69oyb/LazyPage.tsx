import React, { lazy, Suspense } from 'react';

const Page1m69oyb = lazy(() => import('./Page'));

const LazyPage1m69oyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m69oyb />
  </Suspense>
);

export { LazyPage1m69oyb };
