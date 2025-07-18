import React, { lazy, Suspense } from 'react';

const Page1m285sn = lazy(() => import('./Page'));

const LazyPage1m285sn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m285sn />
  </Suspense>
);

export { LazyPage1m285sn };
