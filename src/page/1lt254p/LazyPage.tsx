import React, { lazy, Suspense } from 'react';

const Page1lt254p = lazy(() => import('./Page'));

const LazyPage1lt254p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt254p />
  </Suspense>
);

export { LazyPage1lt254p };
