import React, { lazy, Suspense } from 'react';

const Page1m6bddm = lazy(() => import('./Page'));

const LazyPage1m6bddm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6bddm />
  </Suspense>
);

export { LazyPage1m6bddm };
