import React, { lazy, Suspense } from 'react';

const Page1juni3t = lazy(() => import('./Page'));

const LazyPage1juni3t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1juni3t />
  </Suspense>
);

export { LazyPage1juni3t };
