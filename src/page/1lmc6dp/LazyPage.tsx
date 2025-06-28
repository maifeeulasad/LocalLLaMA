import React, { lazy, Suspense } from 'react';

const Page1lmc6dp = lazy(() => import('./Page'));

const LazyPage1lmc6dp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmc6dp />
  </Suspense>
);

export { LazyPage1lmc6dp };
