import React, { lazy, Suspense } from 'react';

const Page1lmdkbg = lazy(() => import('./Page'));

const LazyPage1lmdkbg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmdkbg />
  </Suspense>
);

export { LazyPage1lmdkbg };
