import React, { lazy, Suspense } from 'react';

const Page1lzhlvb = lazy(() => import('./Page'));

const LazyPage1lzhlvb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzhlvb />
  </Suspense>
);

export { LazyPage1lzhlvb };
