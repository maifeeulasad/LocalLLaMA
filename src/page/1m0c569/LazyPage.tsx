import React, { lazy, Suspense } from 'react';

const Page1m0c569 = lazy(() => import('./Page'));

const LazyPage1m0c569 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0c569 />
  </Suspense>
);

export { LazyPage1m0c569 };
