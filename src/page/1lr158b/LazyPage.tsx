import React, { lazy, Suspense } from 'react';

const Page1lr158b = lazy(() => import('./Page'));

const LazyPage1lr158b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr158b />
  </Suspense>
);

export { LazyPage1lr158b };
