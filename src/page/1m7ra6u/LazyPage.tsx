import React, { lazy, Suspense } from 'react';

const Page1m7ra6u = lazy(() => import('./Page'));

const LazyPage1m7ra6u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ra6u />
  </Suspense>
);

export { LazyPage1m7ra6u };
