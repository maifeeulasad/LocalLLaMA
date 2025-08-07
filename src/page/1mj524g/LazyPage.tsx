import React, { lazy, Suspense } from 'react';

const Page1mj524g = lazy(() => import('./Page'));

const LazyPage1mj524g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj524g />
  </Suspense>
);

export { LazyPage1mj524g };
