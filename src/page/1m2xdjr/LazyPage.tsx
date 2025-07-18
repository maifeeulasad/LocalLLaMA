import React, { lazy, Suspense } from 'react';

const Page1m2xdjr = lazy(() => import('./Page'));

const LazyPage1m2xdjr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2xdjr />
  </Suspense>
);

export { LazyPage1m2xdjr };
