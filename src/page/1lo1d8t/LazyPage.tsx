import React, { lazy, Suspense } from 'react';

const Page1lo1d8t = lazy(() => import('./Page'));

const LazyPage1lo1d8t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo1d8t />
  </Suspense>
);

export { LazyPage1lo1d8t };
