import React, { lazy, Suspense } from 'react';

const Page1m3qpxz = lazy(() => import('./Page'));

const LazyPage1m3qpxz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3qpxz />
  </Suspense>
);

export { LazyPage1m3qpxz };
