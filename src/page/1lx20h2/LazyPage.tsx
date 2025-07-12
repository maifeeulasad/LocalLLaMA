import React, { lazy, Suspense } from 'react';

const Page1lx20h2 = lazy(() => import('./Page'));

const LazyPage1lx20h2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx20h2 />
  </Suspense>
);

export { LazyPage1lx20h2 };
