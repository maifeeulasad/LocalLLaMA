import React, { lazy, Suspense } from 'react';

const Page1m42gid = lazy(() => import('./Page'));

const LazyPage1m42gid = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m42gid />
  </Suspense>
);

export { LazyPage1m42gid };
