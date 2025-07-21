import React, { lazy, Suspense } from 'react';

const Page1m4p75g = lazy(() => import('./Page'));

const LazyPage1m4p75g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4p75g />
  </Suspense>
);

export { LazyPage1m4p75g };
