import React, { lazy, Suspense } from 'react';

const Page1lz4f51 = lazy(() => import('./Page'));

const LazyPage1lz4f51 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz4f51 />
  </Suspense>
);

export { LazyPage1lz4f51 };
