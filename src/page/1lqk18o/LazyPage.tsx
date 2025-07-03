import React, { lazy, Suspense } from 'react';

const Page1lqk18o = lazy(() => import('./Page'));

const LazyPage1lqk18o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqk18o />
  </Suspense>
);

export { LazyPage1lqk18o };
