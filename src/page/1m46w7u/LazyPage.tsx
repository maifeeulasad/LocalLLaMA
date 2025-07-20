import React, { lazy, Suspense } from 'react';

const Page1m46w7u = lazy(() => import('./Page'));

const LazyPage1m46w7u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m46w7u />
  </Suspense>
);

export { LazyPage1m46w7u };
