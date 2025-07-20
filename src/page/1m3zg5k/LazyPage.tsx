import React, { lazy, Suspense } from 'react';

const Page1m3zg5k = lazy(() => import('./Page'));

const LazyPage1m3zg5k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3zg5k />
  </Suspense>
);

export { LazyPage1m3zg5k };
