import React, { lazy, Suspense } from 'react';

const Page1lmxg89 = lazy(() => import('./Page'));

const LazyPage1lmxg89 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmxg89 />
  </Suspense>
);

export { LazyPage1lmxg89 };
