import React, { lazy, Suspense } from 'react';

const Page1lvqzxa = lazy(() => import('./Page'));

const LazyPage1lvqzxa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvqzxa />
  </Suspense>
);

export { LazyPage1lvqzxa };
