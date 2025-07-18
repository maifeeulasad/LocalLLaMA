import React, { lazy, Suspense } from 'react';

const Page1m2osrh = lazy(() => import('./Page'));

const LazyPage1m2osrh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2osrh />
  </Suspense>
);

export { LazyPage1m2osrh };
