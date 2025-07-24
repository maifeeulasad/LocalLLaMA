import React, { lazy, Suspense } from 'react';

const Page1m7n5pq = lazy(() => import('./Page'));

const LazyPage1m7n5pq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7n5pq />
  </Suspense>
);

export { LazyPage1m7n5pq };
