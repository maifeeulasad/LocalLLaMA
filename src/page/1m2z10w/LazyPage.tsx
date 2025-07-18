import React, { lazy, Suspense } from 'react';

const Page1m2z10w = lazy(() => import('./Page'));

const LazyPage1m2z10w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2z10w />
  </Suspense>
);

export { LazyPage1m2z10w };
