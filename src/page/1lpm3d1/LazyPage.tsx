import React, { lazy, Suspense } from 'react';

const Page1lpm3d1 = lazy(() => import('./Page'));

const LazyPage1lpm3d1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpm3d1 />
  </Suspense>
);

export { LazyPage1lpm3d1 };
