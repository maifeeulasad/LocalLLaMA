import React, { lazy, Suspense } from 'react';

const Page1m8dln1 = lazy(() => import('./Page'));

const LazyPage1m8dln1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8dln1 />
  </Suspense>
);

export { LazyPage1m8dln1 };
