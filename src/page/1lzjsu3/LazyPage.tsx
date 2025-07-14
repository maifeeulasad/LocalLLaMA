import React, { lazy, Suspense } from 'react';

const Page1lzjsu3 = lazy(() => import('./Page'));

const LazyPage1lzjsu3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzjsu3 />
  </Suspense>
);

export { LazyPage1lzjsu3 };
