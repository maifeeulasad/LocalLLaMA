import React, { lazy, Suspense } from 'react';

const Page1lr8fhl = lazy(() => import('./Page'));

const LazyPage1lr8fhl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr8fhl />
  </Suspense>
);

export { LazyPage1lr8fhl };
