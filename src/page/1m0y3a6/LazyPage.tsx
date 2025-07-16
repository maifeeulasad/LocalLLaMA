import React, { lazy, Suspense } from 'react';

const Page1m0y3a6 = lazy(() => import('./Page'));

const LazyPage1m0y3a6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0y3a6 />
  </Suspense>
);

export { LazyPage1m0y3a6 };
