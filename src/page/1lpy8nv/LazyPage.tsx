import React, { lazy, Suspense } from 'react';

const Page1lpy8nv = lazy(() => import('./Page'));

const LazyPage1lpy8nv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpy8nv />
  </Suspense>
);

export { LazyPage1lpy8nv };
