import React, { lazy, Suspense } from 'react';

const Page1ls8sk9 = lazy(() => import('./Page'));

const LazyPage1ls8sk9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls8sk9 />
  </Suspense>
);

export { LazyPage1ls8sk9 };
