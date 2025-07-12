import React, { lazy, Suspense } from 'react';

const Page1lxgwgo = lazy(() => import('./Page'));

const LazyPage1lxgwgo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxgwgo />
  </Suspense>
);

export { LazyPage1lxgwgo };
