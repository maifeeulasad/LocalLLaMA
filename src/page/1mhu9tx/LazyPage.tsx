import React, { lazy, Suspense } from 'react';

const Page1mhu9tx = lazy(() => import('./Page'));

const LazyPage1mhu9tx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhu9tx />
  </Suspense>
);

export { LazyPage1mhu9tx };
