import React, { lazy, Suspense } from 'react';

const Page1mgdypr = lazy(() => import('./Page'));

const LazyPage1mgdypr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgdypr />
  </Suspense>
);

export { LazyPage1mgdypr };
