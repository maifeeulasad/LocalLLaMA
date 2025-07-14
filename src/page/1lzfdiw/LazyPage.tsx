import React, { lazy, Suspense } from 'react';

const Page1lzfdiw = lazy(() => import('./Page'));

const LazyPage1lzfdiw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzfdiw />
  </Suspense>
);

export { LazyPage1lzfdiw };
