import React, { lazy, Suspense } from 'react';

const Page1igc6r0 = lazy(() => import('./Page'));

const LazyPage1igc6r0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1igc6r0 />
  </Suspense>
);

export { LazyPage1igc6r0 };
