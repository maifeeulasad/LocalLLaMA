import React, { lazy, Suspense } from 'react';

const Page1m33647 = lazy(() => import('./Page'));

const LazyPage1m33647 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m33647 />
  </Suspense>
);

export { LazyPage1m33647 };
