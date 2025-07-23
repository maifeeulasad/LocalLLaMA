import React, { lazy, Suspense } from 'react';

const Page1m6m0f7 = lazy(() => import('./Page'));

const LazyPage1m6m0f7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6m0f7 />
  </Suspense>
);

export { LazyPage1m6m0f7 };
