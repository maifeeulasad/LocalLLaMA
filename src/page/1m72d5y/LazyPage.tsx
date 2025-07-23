import React, { lazy, Suspense } from 'react';

const Page1m72d5y = lazy(() => import('./Page'));

const LazyPage1m72d5y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m72d5y />
  </Suspense>
);

export { LazyPage1m72d5y };
