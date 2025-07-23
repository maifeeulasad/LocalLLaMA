import React, { lazy, Suspense } from 'react';

const Page1m6qkse = lazy(() => import('./Page'));

const LazyPage1m6qkse = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qkse />
  </Suspense>
);

export { LazyPage1m6qkse };
