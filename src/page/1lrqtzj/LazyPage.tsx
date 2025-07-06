import React, { lazy, Suspense } from 'react';

const Page1lrqtzj = lazy(() => import('./Page'));

const LazyPage1lrqtzj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrqtzj />
  </Suspense>
);

export { LazyPage1lrqtzj };
