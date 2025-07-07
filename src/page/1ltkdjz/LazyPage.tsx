import React, { lazy, Suspense } from 'react';

const Page1ltkdjz = lazy(() => import('./Page'));

const LazyPage1ltkdjz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltkdjz />
  </Suspense>
);

export { LazyPage1ltkdjz };
