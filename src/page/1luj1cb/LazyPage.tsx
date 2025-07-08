import React, { lazy, Suspense } from 'react';

const Page1luj1cb = lazy(() => import('./Page'));

const LazyPage1luj1cb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luj1cb />
  </Suspense>
);

export { LazyPage1luj1cb };
