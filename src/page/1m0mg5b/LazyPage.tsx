import React, { lazy, Suspense } from 'react';

const Page1m0mg5b = lazy(() => import('./Page'));

const LazyPage1m0mg5b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0mg5b />
  </Suspense>
);

export { LazyPage1m0mg5b };
