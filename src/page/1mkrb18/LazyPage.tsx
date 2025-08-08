import React, { lazy, Suspense } from 'react';

const Page1mkrb18 = lazy(() => import('./Page'));

const LazyPage1mkrb18 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkrb18 />
  </Suspense>
);

export { LazyPage1mkrb18 };
