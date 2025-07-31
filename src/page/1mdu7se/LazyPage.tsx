import React, { lazy, Suspense } from 'react';

const Page1mdu7se = lazy(() => import('./Page'));

const LazyPage1mdu7se = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdu7se />
  </Suspense>
);

export { LazyPage1mdu7se };
