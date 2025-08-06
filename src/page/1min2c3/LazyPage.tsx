import React, { lazy, Suspense } from 'react';

const Page1min2c3 = lazy(() => import('./Page'));

const LazyPage1min2c3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1min2c3 />
  </Suspense>
);

export { LazyPage1min2c3 };
