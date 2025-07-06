import React, { lazy, Suspense } from 'react';

const Page1lswkv4 = lazy(() => import('./Page'));

const LazyPage1lswkv4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lswkv4 />
  </Suspense>
);

export { LazyPage1lswkv4 };
