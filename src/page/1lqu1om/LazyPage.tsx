import React, { lazy, Suspense } from 'react';

const Page1lqu1om = lazy(() => import('./Page'));

const LazyPage1lqu1om = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqu1om />
  </Suspense>
);

export { LazyPage1lqu1om };
