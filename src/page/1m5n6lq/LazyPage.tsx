import React, { lazy, Suspense } from 'react';

const Page1m5n6lq = lazy(() => import('./Page'));

const LazyPage1m5n6lq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5n6lq />
  </Suspense>
);

export { LazyPage1m5n6lq };
