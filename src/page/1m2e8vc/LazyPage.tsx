import React, { lazy, Suspense } from 'react';

const Page1m2e8vc = lazy(() => import('./Page'));

const LazyPage1m2e8vc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2e8vc />
  </Suspense>
);

export { LazyPage1m2e8vc };
