import React, { lazy, Suspense } from 'react';

const Page1m07tkl = lazy(() => import('./Page'));

const LazyPage1m07tkl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m07tkl />
  </Suspense>
);

export { LazyPage1m07tkl };
