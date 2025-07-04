import React, { lazy, Suspense } from 'react';

const Page1lqzjz8 = lazy(() => import('./Page'));

const LazyPage1lqzjz8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqzjz8 />
  </Suspense>
);

export { LazyPage1lqzjz8 };
