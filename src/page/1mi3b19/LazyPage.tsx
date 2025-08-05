import React, { lazy, Suspense } from 'react';

const Page1mi3b19 = lazy(() => import('./Page'));

const LazyPage1mi3b19 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi3b19 />
  </Suspense>
);

export { LazyPage1mi3b19 };
