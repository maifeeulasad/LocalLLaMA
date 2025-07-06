import React, { lazy, Suspense } from 'react';

const Page1ls0y8d = lazy(() => import('./Page'));

const LazyPage1ls0y8d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls0y8d />
  </Suspense>
);

export { LazyPage1ls0y8d };
