import React, { lazy, Suspense } from 'react';

const Page1ffv39d = lazy(() => import('./Page'));

const LazyPage1ffv39d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ffv39d />
  </Suspense>
);

export { LazyPage1ffv39d };
