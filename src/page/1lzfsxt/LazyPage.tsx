import React, { lazy, Suspense } from 'react';

const Page1lzfsxt = lazy(() => import('./Page'));

const LazyPage1lzfsxt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzfsxt />
  </Suspense>
);

export { LazyPage1lzfsxt };
