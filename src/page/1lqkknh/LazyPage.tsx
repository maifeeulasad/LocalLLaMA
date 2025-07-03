import React, { lazy, Suspense } from 'react';

const Page1lqkknh = lazy(() => import('./Page'));

const LazyPage1lqkknh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqkknh />
  </Suspense>
);

export { LazyPage1lqkknh };
