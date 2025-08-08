import React, { lazy, Suspense } from 'react';

const Page1mk12sx = lazy(() => import('./Page'));

const LazyPage1mk12sx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk12sx />
  </Suspense>
);

export { LazyPage1mk12sx };
