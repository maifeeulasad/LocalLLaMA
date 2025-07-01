import React, { lazy, Suspense } from 'react';

const Page1loza95 = lazy(() => import('./Page'));

const LazyPage1loza95 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loza95 />
  </Suspense>
);

export { LazyPage1loza95 };
