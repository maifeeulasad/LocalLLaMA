import React, { lazy, Suspense } from 'react';

const Page1m0txlx = lazy(() => import('./Page'));

const LazyPage1m0txlx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0txlx />
  </Suspense>
);

export { LazyPage1m0txlx };
