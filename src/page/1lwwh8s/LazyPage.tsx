import React, { lazy, Suspense } from 'react';

const Page1lwwh8s = lazy(() => import('./Page'));

const LazyPage1lwwh8s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwwh8s />
  </Suspense>
);

export { LazyPage1lwwh8s };
