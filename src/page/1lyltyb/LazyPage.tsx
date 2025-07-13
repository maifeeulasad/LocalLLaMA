import React, { lazy, Suspense } from 'react';

const Page1lyltyb = lazy(() => import('./Page'));

const LazyPage1lyltyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyltyb />
  </Suspense>
);

export { LazyPage1lyltyb };
