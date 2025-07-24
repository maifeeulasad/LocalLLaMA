import React, { lazy, Suspense } from 'react';

const Page1m7kz8s = lazy(() => import('./Page'));

const LazyPage1m7kz8s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7kz8s />
  </Suspense>
);

export { LazyPage1m7kz8s };
