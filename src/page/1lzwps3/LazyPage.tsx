import React, { lazy, Suspense } from 'react';

const Page1lzwps3 = lazy(() => import('./Page'));

const LazyPage1lzwps3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzwps3 />
  </Suspense>
);

export { LazyPage1lzwps3 };
