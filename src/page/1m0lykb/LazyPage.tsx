import React, { lazy, Suspense } from 'react';

const Page1m0lykb = lazy(() => import('./Page'));

const LazyPage1m0lykb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0lykb />
  </Suspense>
);

export { LazyPage1m0lykb };
