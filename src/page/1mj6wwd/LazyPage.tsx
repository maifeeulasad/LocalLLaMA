import React, { lazy, Suspense } from 'react';

const Page1mj6wwd = lazy(() => import('./Page'));

const LazyPage1mj6wwd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6wwd />
  </Suspense>
);

export { LazyPage1mj6wwd };
