import React, { lazy, Suspense } from 'react';

const Page1lqh55j = lazy(() => import('./Page'));

const LazyPage1lqh55j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqh55j />
  </Suspense>
);

export { LazyPage1lqh55j };
