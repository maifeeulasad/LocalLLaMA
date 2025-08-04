import React, { lazy, Suspense } from 'react';

const Page1mgstni = lazy(() => import('./Page'));

const LazyPage1mgstni = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgstni />
  </Suspense>
);

export { LazyPage1mgstni };
