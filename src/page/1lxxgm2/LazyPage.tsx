import React, { lazy, Suspense } from 'react';

const Page1lxxgm2 = lazy(() => import('./Page'));

const LazyPage1lxxgm2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxxgm2 />
  </Suspense>
);

export { LazyPage1lxxgm2 };
