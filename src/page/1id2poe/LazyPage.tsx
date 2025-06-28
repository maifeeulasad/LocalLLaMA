import React, { lazy, Suspense } from 'react';

const Page1id2poe = lazy(() => import('./Page'));

const LazyPage1id2poe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1id2poe />
  </Suspense>
);

export { LazyPage1id2poe };
