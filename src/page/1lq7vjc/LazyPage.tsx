import React, { lazy, Suspense } from 'react';

const Page1lq7vjc = lazy(() => import('./Page'));

const LazyPage1lq7vjc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq7vjc />
  </Suspense>
);

export { LazyPage1lq7vjc };
