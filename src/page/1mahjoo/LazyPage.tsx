import React, { lazy, Suspense } from 'react';

const Page1mahjoo = lazy(() => import('./Page'));

const LazyPage1mahjoo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mahjoo />
  </Suspense>
);

export { LazyPage1mahjoo };
