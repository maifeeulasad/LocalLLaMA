import React, { lazy, Suspense } from 'react';

const Page1m28r3c = lazy(() => import('./Page'));

const LazyPage1m28r3c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m28r3c />
  </Suspense>
);

export { LazyPage1m28r3c };
