import React, { lazy, Suspense } from 'react';

const Page1lzuaa3 = lazy(() => import('./Page'));

const LazyPage1lzuaa3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzuaa3 />
  </Suspense>
);

export { LazyPage1lzuaa3 };
