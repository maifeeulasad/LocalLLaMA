import React, { lazy, Suspense } from 'react';

const Page1lz17w8 = lazy(() => import('./Page'));

const LazyPage1lz17w8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz17w8 />
  </Suspense>
);

export { LazyPage1lz17w8 };
