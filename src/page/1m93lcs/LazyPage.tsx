import React, { lazy, Suspense } from 'react';

const Page1m93lcs = lazy(() => import('./Page'));

const LazyPage1m93lcs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m93lcs />
  </Suspense>
);

export { LazyPage1m93lcs };
