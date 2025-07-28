import React, { lazy, Suspense } from 'react';

const Page1mbeeru = lazy(() => import('./Page'));

const LazyPage1mbeeru = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbeeru />
  </Suspense>
);

export { LazyPage1mbeeru };
