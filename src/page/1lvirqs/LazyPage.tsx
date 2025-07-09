import React, { lazy, Suspense } from 'react';

const Page1lvirqs = lazy(() => import('./Page'));

const LazyPage1lvirqs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvirqs />
  </Suspense>
);

export { LazyPage1lvirqs };
