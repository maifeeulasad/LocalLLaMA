import React, { lazy, Suspense } from 'react';

const Page1mbf3dz = lazy(() => import('./Page'));

const LazyPage1mbf3dz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbf3dz />
  </Suspense>
);

export { LazyPage1mbf3dz };
