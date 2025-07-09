import React, { lazy, Suspense } from 'react';

const Page1lvevuz = lazy(() => import('./Page'));

const LazyPage1lvevuz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvevuz />
  </Suspense>
);

export { LazyPage1lvevuz };
