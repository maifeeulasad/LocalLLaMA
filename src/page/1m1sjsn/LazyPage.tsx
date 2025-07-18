import React, { lazy, Suspense } from 'react';

const Page1m1sjsn = lazy(() => import('./Page'));

const LazyPage1m1sjsn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1sjsn />
  </Suspense>
);

export { LazyPage1m1sjsn };
