import React, { lazy, Suspense } from 'react';

const Page1lqj3eq = lazy(() => import('./Page'));

const LazyPage1lqj3eq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqj3eq />
  </Suspense>
);

export { LazyPage1lqj3eq };
