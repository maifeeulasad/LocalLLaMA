import React, { lazy, Suspense } from 'react';

const Page1mhcy5r = lazy(() => import('./Page'));

const LazyPage1mhcy5r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhcy5r />
  </Suspense>
);

export { LazyPage1mhcy5r };
