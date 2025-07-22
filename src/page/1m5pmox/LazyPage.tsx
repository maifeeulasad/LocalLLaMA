import React, { lazy, Suspense } from 'react';

const Page1m5pmox = lazy(() => import('./Page'));

const LazyPage1m5pmox = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5pmox />
  </Suspense>
);

export { LazyPage1m5pmox };
