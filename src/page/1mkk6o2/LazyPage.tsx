import React, { lazy, Suspense } from 'react';

const Page1mkk6o2 = lazy(() => import('./Page'));

const LazyPage1mkk6o2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkk6o2 />
  </Suspense>
);

export { LazyPage1mkk6o2 };
