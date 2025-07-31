import React, { lazy, Suspense } from 'react';

const Page1mds1gx = lazy(() => import('./Page'));

const LazyPage1mds1gx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mds1gx />
  </Suspense>
);

export { LazyPage1mds1gx };
