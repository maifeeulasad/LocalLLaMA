import React, { lazy, Suspense } from 'react';

const Page1lla27f = lazy(() => import('./Page'));

const LazyPage1lla27f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lla27f />
  </Suspense>
);

export { LazyPage1lla27f };
