import React, { lazy, Suspense } from 'react';

const Page1m4r4j1 = lazy(() => import('./Page'));

const LazyPage1m4r4j1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4r4j1 />
  </Suspense>
);

export { LazyPage1m4r4j1 };
