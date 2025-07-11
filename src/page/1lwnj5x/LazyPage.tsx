import React, { lazy, Suspense } from 'react';

const Page1lwnj5x = lazy(() => import('./Page'));

const LazyPage1lwnj5x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwnj5x />
  </Suspense>
);

export { LazyPage1lwnj5x };
