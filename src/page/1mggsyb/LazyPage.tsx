import React, { lazy, Suspense } from 'react';

const Page1mggsyb = lazy(() => import('./Page'));

const LazyPage1mggsyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mggsyb />
  </Suspense>
);

export { LazyPage1mggsyb };
