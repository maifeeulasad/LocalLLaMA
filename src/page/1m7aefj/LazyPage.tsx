import React, { lazy, Suspense } from 'react';

const Page1m7aefj = lazy(() => import('./Page'));

const LazyPage1m7aefj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7aefj />
  </Suspense>
);

export { LazyPage1m7aefj };
