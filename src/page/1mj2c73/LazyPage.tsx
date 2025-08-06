import React, { lazy, Suspense } from 'react';

const Page1mj2c73 = lazy(() => import('./Page'));

const LazyPage1mj2c73 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2c73 />
  </Suspense>
);

export { LazyPage1mj2c73 };
