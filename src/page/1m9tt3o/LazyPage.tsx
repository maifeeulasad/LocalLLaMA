import React, { lazy, Suspense } from 'react';

const Page1m9tt3o = lazy(() => import('./Page'));

const LazyPage1m9tt3o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9tt3o />
  </Suspense>
);

export { LazyPage1m9tt3o };
