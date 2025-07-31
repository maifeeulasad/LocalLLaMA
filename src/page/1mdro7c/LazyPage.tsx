import React, { lazy, Suspense } from 'react';

const Page1mdro7c = lazy(() => import('./Page'));

const LazyPage1mdro7c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdro7c />
  </Suspense>
);

export { LazyPage1mdro7c };
