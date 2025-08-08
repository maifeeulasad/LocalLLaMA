import React, { lazy, Suspense } from 'react';

const Page1mkavhy = lazy(() => import('./Page'));

const LazyPage1mkavhy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkavhy />
  </Suspense>
);

export { LazyPage1mkavhy };
