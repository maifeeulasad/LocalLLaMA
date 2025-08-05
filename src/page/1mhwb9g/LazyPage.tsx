import React, { lazy, Suspense } from 'react';

const Page1mhwb9g = lazy(() => import('./Page'));

const LazyPage1mhwb9g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhwb9g />
  </Suspense>
);

export { LazyPage1mhwb9g };
