import React, { lazy, Suspense } from 'react';

const Page1ls663p = lazy(() => import('./Page'));

const LazyPage1ls663p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls663p />
  </Suspense>
);

export { LazyPage1ls663p };
