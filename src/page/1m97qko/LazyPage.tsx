import React, { lazy, Suspense } from 'react';

const Page1m97qko = lazy(() => import('./Page'));

const LazyPage1m97qko = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m97qko />
  </Suspense>
);

export { LazyPage1m97qko };
