import React, { lazy, Suspense } from 'react';

const Page1lyj81f = lazy(() => import('./Page'));

const LazyPage1lyj81f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyj81f />
  </Suspense>
);

export { LazyPage1lyj81f };
