import React, { lazy, Suspense } from 'react';

const Page1lri12r = lazy(() => import('./Page'));

const LazyPage1lri12r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lri12r />
  </Suspense>
);

export { LazyPage1lri12r };
