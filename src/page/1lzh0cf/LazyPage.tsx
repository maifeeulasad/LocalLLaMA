import React, { lazy, Suspense } from 'react';

const Page1lzh0cf = lazy(() => import('./Page'));

const LazyPage1lzh0cf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzh0cf />
  </Suspense>
);

export { LazyPage1lzh0cf };
