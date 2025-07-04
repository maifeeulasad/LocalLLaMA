import React, { lazy, Suspense } from 'react';

const Page1lqxesf = lazy(() => import('./Page'));

const LazyPage1lqxesf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqxesf />
  </Suspense>
);

export { LazyPage1lqxesf };
