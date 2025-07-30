import React, { lazy, Suspense } from 'react';

const Page1md0ejq = lazy(() => import('./Page'));

const LazyPage1md0ejq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md0ejq />
  </Suspense>
);

export { LazyPage1md0ejq };
