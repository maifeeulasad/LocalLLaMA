import React, { lazy, Suspense } from 'react';

const Page1lzocuk = lazy(() => import('./Page'));

const LazyPage1lzocuk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzocuk />
  </Suspense>
);

export { LazyPage1lzocuk };
