import React, { lazy, Suspense } from 'react';

const Page1lybm7b = lazy(() => import('./Page'));

const LazyPage1lybm7b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lybm7b />
  </Suspense>
);

export { LazyPage1lybm7b };
