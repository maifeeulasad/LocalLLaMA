import React, { lazy, Suspense } from 'react';

const Page1lsck2e = lazy(() => import('./Page'));

const LazyPage1lsck2e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsck2e />
  </Suspense>
);

export { LazyPage1lsck2e };
