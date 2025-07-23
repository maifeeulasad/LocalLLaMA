import React, { lazy, Suspense } from 'react';

const Page1m71oqv = lazy(() => import('./Page'));

const LazyPage1m71oqv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m71oqv />
  </Suspense>
);

export { LazyPage1m71oqv };
