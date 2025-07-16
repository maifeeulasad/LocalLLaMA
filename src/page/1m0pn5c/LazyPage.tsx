import React, { lazy, Suspense } from 'react';

const Page1m0pn5c = lazy(() => import('./Page'));

const LazyPage1m0pn5c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0pn5c />
  </Suspense>
);

export { LazyPage1m0pn5c };
