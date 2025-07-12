import React, { lazy, Suspense } from 'react';

const Page1lxljco = lazy(() => import('./Page'));

const LazyPage1lxljco = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxljco />
  </Suspense>
);

export { LazyPage1lxljco };
