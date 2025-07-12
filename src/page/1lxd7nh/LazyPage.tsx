import React, { lazy, Suspense } from 'react';

const Page1lxd7nh = lazy(() => import('./Page'));

const LazyPage1lxd7nh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxd7nh />
  </Suspense>
);

export { LazyPage1lxd7nh };
