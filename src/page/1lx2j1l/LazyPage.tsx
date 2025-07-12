import React, { lazy, Suspense } from 'react';

const Page1lx2j1l = lazy(() => import('./Page'));

const LazyPage1lx2j1l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx2j1l />
  </Suspense>
);

export { LazyPage1lx2j1l };
