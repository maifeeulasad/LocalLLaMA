import React, { lazy, Suspense } from 'react';

const Page1lnh3d8 = lazy(() => import('./Page'));

const LazyPage1lnh3d8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnh3d8 />
  </Suspense>
);

export { LazyPage1lnh3d8 };
