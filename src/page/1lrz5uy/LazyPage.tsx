import React, { lazy, Suspense } from 'react';

const Page1lrz5uy = lazy(() => import('./Page'));

const LazyPage1lrz5uy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrz5uy />
  </Suspense>
);

export { LazyPage1lrz5uy };
