import React, { lazy, Suspense } from 'react';

const Page1m0cgnl = lazy(() => import('./Page'));

const LazyPage1m0cgnl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0cgnl />
  </Suspense>
);

export { LazyPage1m0cgnl };
