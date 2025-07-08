import React, { lazy, Suspense } from 'react';

const Page1ltv7wq = lazy(() => import('./Page'));

const LazyPage1ltv7wq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltv7wq />
  </Suspense>
);

export { LazyPage1ltv7wq };
