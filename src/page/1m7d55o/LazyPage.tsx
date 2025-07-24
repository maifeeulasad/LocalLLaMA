import React, { lazy, Suspense } from 'react';

const Page1m7d55o = lazy(() => import('./Page'));

const LazyPage1m7d55o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7d55o />
  </Suspense>
);

export { LazyPage1m7d55o };
