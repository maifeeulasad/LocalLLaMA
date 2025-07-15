import React, { lazy, Suspense } from 'react';

const Page1lzw6yu = lazy(() => import('./Page'));

const LazyPage1lzw6yu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzw6yu />
  </Suspense>
);

export { LazyPage1lzw6yu };
