import React, { lazy, Suspense } from 'react';

const Page1lzna91 = lazy(() => import('./Page'));

const LazyPage1lzna91 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzna91 />
  </Suspense>
);

export { LazyPage1lzna91 };
