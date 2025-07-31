import React, { lazy, Suspense } from 'react';

const Page1mdoevz = lazy(() => import('./Page'));

const LazyPage1mdoevz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdoevz />
  </Suspense>
);

export { LazyPage1mdoevz };
