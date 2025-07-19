import React, { lazy, Suspense } from 'react';

const Page1m3ezgz = lazy(() => import('./Page'));

const LazyPage1m3ezgz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3ezgz />
  </Suspense>
);

export { LazyPage1m3ezgz };
