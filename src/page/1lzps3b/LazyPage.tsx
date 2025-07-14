import React, { lazy, Suspense } from 'react';

const Page1lzps3b = lazy(() => import('./Page'));

const LazyPage1lzps3b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzps3b />
  </Suspense>
);

export { LazyPage1lzps3b };
