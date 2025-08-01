import React, { lazy, Suspense } from 'react';

const Page1me20vl = lazy(() => import('./Page'));

const LazyPage1me20vl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me20vl />
  </Suspense>
);

export { LazyPage1me20vl };
