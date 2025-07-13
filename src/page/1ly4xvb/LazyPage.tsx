import React, { lazy, Suspense } from 'react';

const Page1ly4xvb = lazy(() => import('./Page'));

const LazyPage1ly4xvb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly4xvb />
  </Suspense>
);

export { LazyPage1ly4xvb };
