import React, { lazy, Suspense } from 'react';

const Page1lr25av = lazy(() => import('./Page'));

const LazyPage1lr25av = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr25av />
  </Suspense>
);

export { LazyPage1lr25av };
