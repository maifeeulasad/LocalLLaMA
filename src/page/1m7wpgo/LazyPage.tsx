import React, { lazy, Suspense } from 'react';

const Page1m7wpgo = lazy(() => import('./Page'));

const LazyPage1m7wpgo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7wpgo />
  </Suspense>
);

export { LazyPage1m7wpgo };
