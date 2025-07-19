import React, { lazy, Suspense } from 'react';

const Page1m3htbw = lazy(() => import('./Page'));

const LazyPage1m3htbw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3htbw />
  </Suspense>
);

export { LazyPage1m3htbw };
