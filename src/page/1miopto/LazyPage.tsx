import React, { lazy, Suspense } from 'react';

const Page1miopto = lazy(() => import('./Page'));

const LazyPage1miopto = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miopto />
  </Suspense>
);

export { LazyPage1miopto };
