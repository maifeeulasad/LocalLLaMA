import React, { lazy, Suspense } from 'react';

const Page1m820ry = lazy(() => import('./Page'));

const LazyPage1m820ry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m820ry />
  </Suspense>
);

export { LazyPage1m820ry };
