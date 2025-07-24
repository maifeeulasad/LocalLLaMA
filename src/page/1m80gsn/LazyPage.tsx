import React, { lazy, Suspense } from 'react';

const Page1m80gsn = lazy(() => import('./Page'));

const LazyPage1m80gsn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m80gsn />
  </Suspense>
);

export { LazyPage1m80gsn };
