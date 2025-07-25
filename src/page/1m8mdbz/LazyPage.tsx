import React, { lazy, Suspense } from 'react';

const Page1m8mdbz = lazy(() => import('./Page'));

const LazyPage1m8mdbz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8mdbz />
  </Suspense>
);

export { LazyPage1m8mdbz };
