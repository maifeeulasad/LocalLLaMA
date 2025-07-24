import React, { lazy, Suspense } from 'react';

const Page1m7av4q = lazy(() => import('./Page'));

const LazyPage1m7av4q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7av4q />
  </Suspense>
);

export { LazyPage1m7av4q };
