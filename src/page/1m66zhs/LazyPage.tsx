import React, { lazy, Suspense } from 'react';

const Page1m66zhs = lazy(() => import('./Page'));

const LazyPage1m66zhs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m66zhs />
  </Suspense>
);

export { LazyPage1m66zhs };
