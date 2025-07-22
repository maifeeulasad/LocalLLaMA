import React, { lazy, Suspense } from 'react';

const Page1m5l8e4 = lazy(() => import('./Page'));

const LazyPage1m5l8e4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5l8e4 />
  </Suspense>
);

export { LazyPage1m5l8e4 };
