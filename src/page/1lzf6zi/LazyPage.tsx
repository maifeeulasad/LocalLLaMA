import React, { lazy, Suspense } from 'react';

const Page1lzf6zi = lazy(() => import('./Page'));

const LazyPage1lzf6zi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzf6zi />
  </Suspense>
);

export { LazyPage1lzf6zi };
