import React, { lazy, Suspense } from 'react';

const Page1m0jeyu = lazy(() => import('./Page'));

const LazyPage1m0jeyu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0jeyu />
  </Suspense>
);

export { LazyPage1m0jeyu };
