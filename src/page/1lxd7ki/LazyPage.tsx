import React, { lazy, Suspense } from 'react';

const Page1lxd7ki = lazy(() => import('./Page'));

const LazyPage1lxd7ki = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxd7ki />
  </Suspense>
);

export { LazyPage1lxd7ki };
