import React, { lazy, Suspense } from 'react';

const Page1lybqtw = lazy(() => import('./Page'));

const LazyPage1lybqtw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lybqtw />
  </Suspense>
);

export { LazyPage1lybqtw };
