import React, { lazy, Suspense } from 'react';

const Page1mab2i2 = lazy(() => import('./Page'));

const LazyPage1mab2i2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mab2i2 />
  </Suspense>
);

export { LazyPage1mab2i2 };
