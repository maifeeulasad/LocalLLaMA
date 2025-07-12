import React, { lazy, Suspense } from 'react';

const Page1lxj1o0 = lazy(() => import('./Page'));

const LazyPage1lxj1o0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxj1o0 />
  </Suspense>
);

export { LazyPage1lxj1o0 };
