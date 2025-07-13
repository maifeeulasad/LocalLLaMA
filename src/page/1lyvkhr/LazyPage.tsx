import React, { lazy, Suspense } from 'react';

const Page1lyvkhr = lazy(() => import('./Page'));

const LazyPage1lyvkhr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyvkhr />
  </Suspense>
);

export { LazyPage1lyvkhr };
