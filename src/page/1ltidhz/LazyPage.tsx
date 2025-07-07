import React, { lazy, Suspense } from 'react';

const Page1ltidhz = lazy(() => import('./Page'));

const LazyPage1ltidhz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltidhz />
  </Suspense>
);

export { LazyPage1ltidhz };
