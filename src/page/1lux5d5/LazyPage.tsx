import React, { lazy, Suspense } from 'react';

const Page1lux5d5 = lazy(() => import('./Page'));

const LazyPage1lux5d5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lux5d5 />
  </Suspense>
);

export { LazyPage1lux5d5 };
