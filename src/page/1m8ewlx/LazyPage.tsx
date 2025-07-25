import React, { lazy, Suspense } from 'react';

const Page1m8ewlx = lazy(() => import('./Page'));

const LazyPage1m8ewlx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8ewlx />
  </Suspense>
);

export { LazyPage1m8ewlx };
