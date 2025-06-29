import React, { lazy, Suspense } from 'react';

const Page1lmxduv = lazy(() => import('./Page'));

const LazyPage1lmxduv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmxduv />
  </Suspense>
);

export { LazyPage1lmxduv };
