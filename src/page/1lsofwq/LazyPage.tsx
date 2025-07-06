import React, { lazy, Suspense } from 'react';

const Page1lsofwq = lazy(() => import('./Page'));

const LazyPage1lsofwq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsofwq />
  </Suspense>
);

export { LazyPage1lsofwq };
