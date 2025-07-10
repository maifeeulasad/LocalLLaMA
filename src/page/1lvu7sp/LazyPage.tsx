import React, { lazy, Suspense } from 'react';

const Page1lvu7sp = lazy(() => import('./Page'));

const LazyPage1lvu7sp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvu7sp />
  </Suspense>
);

export { LazyPage1lvu7sp };
