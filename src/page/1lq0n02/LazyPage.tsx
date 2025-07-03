import React, { lazy, Suspense } from 'react';

const Page1lq0n02 = lazy(() => import('./Page'));

const LazyPage1lq0n02 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq0n02 />
  </Suspense>
);

export { LazyPage1lq0n02 };
