import React, { lazy, Suspense } from 'react';

const Page1m394zh = lazy(() => import('./Page'));

const LazyPage1m394zh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m394zh />
  </Suspense>
);

export { LazyPage1m394zh };
