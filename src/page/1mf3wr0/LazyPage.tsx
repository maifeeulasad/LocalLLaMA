import React, { lazy, Suspense } from 'react';

const Page1mf3wr0 = lazy(() => import('./Page'));

const LazyPage1mf3wr0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf3wr0 />
  </Suspense>
);

export { LazyPage1mf3wr0 };
