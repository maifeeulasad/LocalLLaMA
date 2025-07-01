import React, { lazy, Suspense } from 'react';

const Page1lo9mcm = lazy(() => import('./Page'));

const LazyPage1lo9mcm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo9mcm />
  </Suspense>
);

export { LazyPage1lo9mcm };
