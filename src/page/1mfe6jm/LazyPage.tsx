import React, { lazy, Suspense } from 'react';

const Page1mfe6jm = lazy(() => import('./Page'));

const LazyPage1mfe6jm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfe6jm />
  </Suspense>
);

export { LazyPage1mfe6jm };
