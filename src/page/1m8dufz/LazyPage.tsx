import React, { lazy, Suspense } from 'react';

const Page1m8dufz = lazy(() => import('./Page'));

const LazyPage1m8dufz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8dufz />
  </Suspense>
);

export { LazyPage1m8dufz };
