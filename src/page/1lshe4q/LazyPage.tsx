import React, { lazy, Suspense } from 'react';

const Page1lshe4q = lazy(() => import('./Page'));

const LazyPage1lshe4q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lshe4q />
  </Suspense>
);

export { LazyPage1lshe4q };
