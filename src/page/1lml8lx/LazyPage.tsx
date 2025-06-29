import React, { lazy, Suspense } from 'react';

const Page1lml8lx = lazy(() => import('./Page'));

const LazyPage1lml8lx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lml8lx />
  </Suspense>
);

export { LazyPage1lml8lx };
