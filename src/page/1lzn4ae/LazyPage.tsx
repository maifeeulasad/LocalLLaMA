import React, { lazy, Suspense } from 'react';

const Page1lzn4ae = lazy(() => import('./Page'));

const LazyPage1lzn4ae = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzn4ae />
  </Suspense>
);

export { LazyPage1lzn4ae };
