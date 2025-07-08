import React, { lazy, Suspense } from 'react';

const Page1luha71 = lazy(() => import('./Page'));

const LazyPage1luha71 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luha71 />
  </Suspense>
);

export { LazyPage1luha71 };
