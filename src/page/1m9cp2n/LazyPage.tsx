import React, { lazy, Suspense } from 'react';

const Page1m9cp2n = lazy(() => import('./Page'));

const LazyPage1m9cp2n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9cp2n />
  </Suspense>
);

export { LazyPage1m9cp2n };
