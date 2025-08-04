import React, { lazy, Suspense } from 'react';

const Page1mgpq7a = lazy(() => import('./Page'));

const LazyPage1mgpq7a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgpq7a />
  </Suspense>
);

export { LazyPage1mgpq7a };
