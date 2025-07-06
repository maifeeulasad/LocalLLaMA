import React, { lazy, Suspense } from 'react';

const Page1lsw9vz = lazy(() => import('./Page'));

const LazyPage1lsw9vz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsw9vz />
  </Suspense>
);

export { LazyPage1lsw9vz };
