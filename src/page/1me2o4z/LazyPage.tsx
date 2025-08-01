import React, { lazy, Suspense } from 'react';

const Page1me2o4z = lazy(() => import('./Page'));

const LazyPage1me2o4z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me2o4z />
  </Suspense>
);

export { LazyPage1me2o4z };
