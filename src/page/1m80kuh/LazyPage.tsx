import React, { lazy, Suspense } from 'react';

const Page1m80kuh = lazy(() => import('./Page'));

const LazyPage1m80kuh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m80kuh />
  </Suspense>
);

export { LazyPage1m80kuh };
