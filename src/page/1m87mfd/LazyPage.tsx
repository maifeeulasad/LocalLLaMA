import React, { lazy, Suspense } from 'react';

const Page1m87mfd = lazy(() => import('./Page'));

const LazyPage1m87mfd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m87mfd />
  </Suspense>
);

export { LazyPage1m87mfd };
