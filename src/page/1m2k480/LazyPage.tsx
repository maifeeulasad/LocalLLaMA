import React, { lazy, Suspense } from 'react';

const Page1m2k480 = lazy(() => import('./Page'));

const LazyPage1m2k480 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2k480 />
  </Suspense>
);

export { LazyPage1m2k480 };
