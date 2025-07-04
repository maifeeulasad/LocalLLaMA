import React, { lazy, Suspense } from 'react';

const Page1lqw2yg = lazy(() => import('./Page'));

const LazyPage1lqw2yg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqw2yg />
  </Suspense>
);

export { LazyPage1lqw2yg };
