import React, { lazy, Suspense } from 'react';

const Page1lppg3g = lazy(() => import('./Page'));

const LazyPage1lppg3g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lppg3g />
  </Suspense>
);

export { LazyPage1lppg3g };
