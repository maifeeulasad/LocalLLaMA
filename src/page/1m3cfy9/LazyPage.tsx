import React, { lazy, Suspense } from 'react';

const Page1m3cfy9 = lazy(() => import('./Page'));

const LazyPage1m3cfy9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3cfy9 />
  </Suspense>
);

export { LazyPage1m3cfy9 };
