import React, { lazy, Suspense } from 'react';

const Page1mdbcax = lazy(() => import('./Page'));

const LazyPage1mdbcax = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdbcax />
  </Suspense>
);

export { LazyPage1mdbcax };
