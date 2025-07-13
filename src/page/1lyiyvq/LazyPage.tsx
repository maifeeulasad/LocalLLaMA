import React, { lazy, Suspense } from 'react';

const Page1lyiyvq = lazy(() => import('./Page'));

const LazyPage1lyiyvq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyiyvq />
  </Suspense>
);

export { LazyPage1lyiyvq };
