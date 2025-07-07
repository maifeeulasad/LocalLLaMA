import React, { lazy, Suspense } from 'react';

const Page1ltm1mp = lazy(() => import('./Page'));

const LazyPage1ltm1mp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltm1mp />
  </Suspense>
);

export { LazyPage1ltm1mp };
