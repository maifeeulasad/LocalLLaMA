import React, { lazy, Suspense } from 'react';

const Page1m7kfet = lazy(() => import('./Page'));

const LazyPage1m7kfet = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7kfet />
  </Suspense>
);

export { LazyPage1m7kfet };
