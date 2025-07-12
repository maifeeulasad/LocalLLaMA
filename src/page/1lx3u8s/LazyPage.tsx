import React, { lazy, Suspense } from 'react';

const Page1lx3u8s = lazy(() => import('./Page'));

const LazyPage1lx3u8s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx3u8s />
  </Suspense>
);

export { LazyPage1lx3u8s };
