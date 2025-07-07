import React, { lazy, Suspense } from 'react';

const Page1lt8zkl = lazy(() => import('./Page'));

const LazyPage1lt8zkl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt8zkl />
  </Suspense>
);

export { LazyPage1lt8zkl };
