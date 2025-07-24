import React, { lazy, Suspense } from 'react';

const Page1m7pi3t = lazy(() => import('./Page'));

const LazyPage1m7pi3t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7pi3t />
  </Suspense>
);

export { LazyPage1m7pi3t };
