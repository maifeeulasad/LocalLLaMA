import React, { lazy, Suspense } from 'react';

const Page1lqebbv = lazy(() => import('./Page'));

const LazyPage1lqebbv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqebbv />
  </Suspense>
);

export { LazyPage1lqebbv };
