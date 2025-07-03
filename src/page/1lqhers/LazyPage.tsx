import React, { lazy, Suspense } from 'react';

const Page1lqhers = lazy(() => import('./Page'));

const LazyPage1lqhers = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqhers />
  </Suspense>
);

export { LazyPage1lqhers };
