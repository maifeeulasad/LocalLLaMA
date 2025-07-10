import React, { lazy, Suspense } from 'react';

const Page1lvqc2u = lazy(() => import('./Page'));

const LazyPage1lvqc2u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvqc2u />
  </Suspense>
);

export { LazyPage1lvqc2u };
