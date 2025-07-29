import React, { lazy, Suspense } from 'react';

const Page1mc83jm = lazy(() => import('./Page'));

const LazyPage1mc83jm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc83jm />
  </Suspense>
);

export { LazyPage1mc83jm };
