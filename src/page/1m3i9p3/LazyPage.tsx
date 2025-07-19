import React, { lazy, Suspense } from 'react';

const Page1m3i9p3 = lazy(() => import('./Page'));

const LazyPage1m3i9p3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3i9p3 />
  </Suspense>
);

export { LazyPage1m3i9p3 };
