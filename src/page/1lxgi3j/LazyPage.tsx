import React, { lazy, Suspense } from 'react';

const Page1lxgi3j = lazy(() => import('./Page'));

const LazyPage1lxgi3j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxgi3j />
  </Suspense>
);

export { LazyPage1lxgi3j };
