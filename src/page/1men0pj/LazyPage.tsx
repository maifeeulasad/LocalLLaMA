import React, { lazy, Suspense } from 'react';

const Page1men0pj = lazy(() => import('./Page'));

const LazyPage1men0pj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1men0pj />
  </Suspense>
);

export { LazyPage1men0pj };
