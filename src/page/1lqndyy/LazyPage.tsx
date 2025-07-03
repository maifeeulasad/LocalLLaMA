import React, { lazy, Suspense } from 'react';

const Page1lqndyy = lazy(() => import('./Page'));

const LazyPage1lqndyy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqndyy />
  </Suspense>
);

export { LazyPage1lqndyy };
