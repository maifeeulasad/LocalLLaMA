import React, { lazy, Suspense } from 'react';

const Page1lzqh66 = lazy(() => import('./Page'));

const LazyPage1lzqh66 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzqh66 />
  </Suspense>
);

export { LazyPage1lzqh66 };
