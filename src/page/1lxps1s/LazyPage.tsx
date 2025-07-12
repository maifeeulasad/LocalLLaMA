import React, { lazy, Suspense } from 'react';

const Page1lxps1s = lazy(() => import('./Page'));

const LazyPage1lxps1s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxps1s />
  </Suspense>
);

export { LazyPage1lxps1s };
