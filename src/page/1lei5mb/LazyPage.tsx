import React, { lazy, Suspense } from 'react';

const Page1lei5mb = lazy(() => import('./Page'));

const LazyPage1lei5mb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lei5mb />
  </Suspense>
);

export { LazyPage1lei5mb };
