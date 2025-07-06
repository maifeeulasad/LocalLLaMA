import React, { lazy, Suspense } from 'react';

const Page1lsipdy = lazy(() => import('./Page'));

const LazyPage1lsipdy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsipdy />
  </Suspense>
);

export { LazyPage1lsipdy };
