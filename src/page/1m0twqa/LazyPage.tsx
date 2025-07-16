import React, { lazy, Suspense } from 'react';

const Page1m0twqa = lazy(() => import('./Page'));

const LazyPage1m0twqa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0twqa />
  </Suspense>
);

export { LazyPage1m0twqa };
