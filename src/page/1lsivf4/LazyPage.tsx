import React, { lazy, Suspense } from 'react';

const Page1lsivf4 = lazy(() => import('./Page'));

const LazyPage1lsivf4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsivf4 />
  </Suspense>
);

export { LazyPage1lsivf4 };
