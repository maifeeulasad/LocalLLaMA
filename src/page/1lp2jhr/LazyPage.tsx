import React, { lazy, Suspense } from 'react';

const Page1lp2jhr = lazy(() => import('./Page'));

const LazyPage1lp2jhr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp2jhr />
  </Suspense>
);

export { LazyPage1lp2jhr };
