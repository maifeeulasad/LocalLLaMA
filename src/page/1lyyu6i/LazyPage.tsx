import React, { lazy, Suspense } from 'react';

const Page1lyyu6i = lazy(() => import('./Page'));

const LazyPage1lyyu6i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyyu6i />
  </Suspense>
);

export { LazyPage1lyyu6i };
