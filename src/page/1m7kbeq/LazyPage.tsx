import React, { lazy, Suspense } from 'react';

const Page1m7kbeq = lazy(() => import('./Page'));

const LazyPage1m7kbeq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7kbeq />
  </Suspense>
);

export { LazyPage1m7kbeq };
