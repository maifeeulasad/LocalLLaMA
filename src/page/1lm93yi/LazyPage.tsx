import React, { lazy, Suspense } from 'react';

const Page1lm93yi = lazy(() => import('./Page'));

const LazyPage1lm93yi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm93yi />
  </Suspense>
);

export { LazyPage1lm93yi };
