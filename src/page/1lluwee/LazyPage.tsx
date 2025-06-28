import React, { lazy, Suspense } from 'react';

const Page1lluwee = lazy(() => import('./Page'));

const LazyPage1lluwee = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lluwee />
  </Suspense>
);

export { LazyPage1lluwee };
