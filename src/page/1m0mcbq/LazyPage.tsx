import React, { lazy, Suspense } from 'react';

const Page1m0mcbq = lazy(() => import('./Page'));

const LazyPage1m0mcbq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0mcbq />
  </Suspense>
);

export { LazyPage1m0mcbq };
