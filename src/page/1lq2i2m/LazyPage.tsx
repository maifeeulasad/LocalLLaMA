import React, { lazy, Suspense } from 'react';

const Page1lq2i2m = lazy(() => import('./Page'));

const LazyPage1lq2i2m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq2i2m />
  </Suspense>
);

export { LazyPage1lq2i2m };
