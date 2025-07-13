import React, { lazy, Suspense } from 'react';

const Page1lybx9x = lazy(() => import('./Page'));

const LazyPage1lybx9x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lybx9x />
  </Suspense>
);

export { LazyPage1lybx9x };
