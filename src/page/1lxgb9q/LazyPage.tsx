import React, { lazy, Suspense } from 'react';

const Page1lxgb9q = lazy(() => import('./Page'));

const LazyPage1lxgb9q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxgb9q />
  </Suspense>
);

export { LazyPage1lxgb9q };
