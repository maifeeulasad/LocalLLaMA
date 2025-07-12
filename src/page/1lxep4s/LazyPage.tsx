import React, { lazy, Suspense } from 'react';

const Page1lxep4s = lazy(() => import('./Page'));

const LazyPage1lxep4s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxep4s />
  </Suspense>
);

export { LazyPage1lxep4s };
