import React, { lazy, Suspense } from 'react';

const Page1lzl5zk = lazy(() => import('./Page'));

const LazyPage1lzl5zk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzl5zk />
  </Suspense>
);

export { LazyPage1lzl5zk };
