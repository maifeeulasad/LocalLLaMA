import React, { lazy, Suspense } from 'react';

const Page1lyyhwz = lazy(() => import('./Page'));

const LazyPage1lyyhwz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyyhwz />
  </Suspense>
);

export { LazyPage1lyyhwz };
