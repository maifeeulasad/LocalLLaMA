import React, { lazy, Suspense } from 'react';

const Page1ktx15j = lazy(() => import('./Page'));

const LazyPage1ktx15j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ktx15j />
  </Suspense>
);

export { LazyPage1ktx15j };
