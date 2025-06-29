import React, { lazy, Suspense } from 'react';

const Page1lncfmw = lazy(() => import('./Page'));

const LazyPage1lncfmw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lncfmw />
  </Suspense>
);

export { LazyPage1lncfmw };
