import React, { lazy, Suspense } from 'react';

const Page1m2lklq = lazy(() => import('./Page'));

const LazyPage1m2lklq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2lklq />
  </Suspense>
);

export { LazyPage1m2lklq };
