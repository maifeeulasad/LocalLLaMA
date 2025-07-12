import React, { lazy, Suspense } from 'react';

const Page1lxs7c9 = lazy(() => import('./Page'));

const LazyPage1lxs7c9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxs7c9 />
  </Suspense>
);

export { LazyPage1lxs7c9 };
