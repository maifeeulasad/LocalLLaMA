import React, { lazy, Suspense } from 'react';

const Page1mj6enx = lazy(() => import('./Page'));

const LazyPage1mj6enx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6enx />
  </Suspense>
);

export { LazyPage1mj6enx };
