import React, { lazy, Suspense } from 'react';

const Page1m4hfy0 = lazy(() => import('./Page'));

const LazyPage1m4hfy0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4hfy0 />
  </Suspense>
);

export { LazyPage1m4hfy0 };
