import React, { lazy, Suspense } from 'react';

const Page1lr9g4t = lazy(() => import('./Page'));

const LazyPage1lr9g4t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr9g4t />
  </Suspense>
);

export { LazyPage1lr9g4t };
