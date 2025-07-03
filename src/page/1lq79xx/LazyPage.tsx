import React, { lazy, Suspense } from 'react';

const Page1lq79xx = lazy(() => import('./Page'));

const LazyPage1lq79xx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq79xx />
  </Suspense>
);

export { LazyPage1lq79xx };
