import React, { lazy, Suspense } from 'react';

const Page1lzm645 = lazy(() => import('./Page'));

const LazyPage1lzm645 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzm645 />
  </Suspense>
);

export { LazyPage1lzm645 };
