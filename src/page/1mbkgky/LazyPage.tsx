import React, { lazy, Suspense } from 'react';

const Page1mbkgky = lazy(() => import('./Page'));

const LazyPage1mbkgky = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbkgky />
  </Suspense>
);

export { LazyPage1mbkgky };
