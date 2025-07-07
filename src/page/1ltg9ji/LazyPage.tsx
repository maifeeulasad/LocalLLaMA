import React, { lazy, Suspense } from 'react';

const Page1ltg9ji = lazy(() => import('./Page'));

const LazyPage1ltg9ji = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltg9ji />
  </Suspense>
);

export { LazyPage1ltg9ji };
