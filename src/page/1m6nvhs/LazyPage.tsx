import React, { lazy, Suspense } from 'react';

const Page1m6nvhs = lazy(() => import('./Page'));

const LazyPage1m6nvhs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6nvhs />
  </Suspense>
);

export { LazyPage1m6nvhs };
