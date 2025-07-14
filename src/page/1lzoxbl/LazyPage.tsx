import React, { lazy, Suspense } from 'react';

const Page1lzoxbl = lazy(() => import('./Page'));

const LazyPage1lzoxbl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzoxbl />
  </Suspense>
);

export { LazyPage1lzoxbl };
