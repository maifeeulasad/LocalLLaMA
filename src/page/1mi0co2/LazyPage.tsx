import React, { lazy, Suspense } from 'react';

const Page1mi0co2 = lazy(() => import('./Page'));

const LazyPage1mi0co2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi0co2 />
  </Suspense>
);

export { LazyPage1mi0co2 };
