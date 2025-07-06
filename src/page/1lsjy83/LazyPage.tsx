import React, { lazy, Suspense } from 'react';

const Page1lsjy83 = lazy(() => import('./Page'));

const LazyPage1lsjy83 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsjy83 />
  </Suspense>
);

export { LazyPage1lsjy83 };
