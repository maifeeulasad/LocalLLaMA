import React, { lazy, Suspense } from 'react';

const Page1lro41o = lazy(() => import('./Page'));

const LazyPage1lro41o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lro41o />
  </Suspense>
);

export { LazyPage1lro41o };
