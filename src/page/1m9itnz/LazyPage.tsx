import React, { lazy, Suspense } from 'react';

const Page1m9itnz = lazy(() => import('./Page'));

const LazyPage1m9itnz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9itnz />
  </Suspense>
);

export { LazyPage1m9itnz };
