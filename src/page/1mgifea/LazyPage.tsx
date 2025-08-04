import React, { lazy, Suspense } from 'react';

const Page1mgifea = lazy(() => import('./Page'));

const LazyPage1mgifea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgifea />
  </Suspense>
);

export { LazyPage1mgifea };
