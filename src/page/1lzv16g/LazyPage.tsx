import React, { lazy, Suspense } from 'react';

const Page1lzv16g = lazy(() => import('./Page'));

const LazyPage1lzv16g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzv16g />
  </Suspense>
);

export { LazyPage1lzv16g };
