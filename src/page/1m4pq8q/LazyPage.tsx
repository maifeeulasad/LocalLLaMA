import React, { lazy, Suspense } from 'react';

const Page1m4pq8q = lazy(() => import('./Page'));

const LazyPage1m4pq8q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4pq8q />
  </Suspense>
);

export { LazyPage1m4pq8q };
