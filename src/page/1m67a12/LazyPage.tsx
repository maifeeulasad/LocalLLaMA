import React, { lazy, Suspense } from 'react';

const Page1m67a12 = lazy(() => import('./Page'));

const LazyPage1m67a12 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m67a12 />
  </Suspense>
);

export { LazyPage1m67a12 };
