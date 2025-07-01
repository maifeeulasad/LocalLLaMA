import React, { lazy, Suspense } from 'react';

const Page1lok3r2 = lazy(() => import('./Page'));

const LazyPage1lok3r2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lok3r2 />
  </Suspense>
);

export { LazyPage1lok3r2 };
