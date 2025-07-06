import React, { lazy, Suspense } from 'react';

const Page1lsyd4g = lazy(() => import('./Page'));

const LazyPage1lsyd4g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsyd4g />
  </Suspense>
);

export { LazyPage1lsyd4g };
