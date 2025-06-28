import React, { lazy, Suspense } from 'react';

const Page1llu89r = lazy(() => import('./Page'));

const LazyPage1llu89r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llu89r />
  </Suspense>
);

export { LazyPage1llu89r };
