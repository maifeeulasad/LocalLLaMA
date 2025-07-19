import React, { lazy, Suspense } from 'react';

const Page1m3jo3d = lazy(() => import('./Page'));

const LazyPage1m3jo3d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3jo3d />
  </Suspense>
);

export { LazyPage1m3jo3d };
