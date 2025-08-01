import React, { lazy, Suspense } from 'react';

const Page1meadtx = lazy(() => import('./Page'));

const LazyPage1meadtx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meadtx />
  </Suspense>
);

export { LazyPage1meadtx };
