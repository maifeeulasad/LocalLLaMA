import React, { lazy, Suspense } from 'react';

const Page1m6jdyz = lazy(() => import('./Page'));

const LazyPage1m6jdyz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6jdyz />
  </Suspense>
);

export { LazyPage1m6jdyz };
