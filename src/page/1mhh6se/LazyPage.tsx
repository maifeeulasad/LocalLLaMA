import React, { lazy, Suspense } from 'react';

const Page1mhh6se = lazy(() => import('./Page'));

const LazyPage1mhh6se = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhh6se />
  </Suspense>
);

export { LazyPage1mhh6se };
