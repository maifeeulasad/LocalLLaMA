import React, { lazy, Suspense } from 'react';

const Page1m4al6m = lazy(() => import('./Page'));

const LazyPage1m4al6m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4al6m />
  </Suspense>
);

export { LazyPage1m4al6m };
