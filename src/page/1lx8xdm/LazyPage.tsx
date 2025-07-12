import React, { lazy, Suspense } from 'react';

const Page1lx8xdm = lazy(() => import('./Page'));

const LazyPage1lx8xdm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx8xdm />
  </Suspense>
);

export { LazyPage1lx8xdm };
