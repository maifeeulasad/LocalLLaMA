import React, { lazy, Suspense } from 'react';

const Page1mj056j = lazy(() => import('./Page'));

const LazyPage1mj056j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj056j />
  </Suspense>
);

export { LazyPage1mj056j };
