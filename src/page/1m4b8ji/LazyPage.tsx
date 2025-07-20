import React, { lazy, Suspense } from 'react';

const Page1m4b8ji = lazy(() => import('./Page'));

const LazyPage1m4b8ji = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4b8ji />
  </Suspense>
);

export { LazyPage1m4b8ji };
