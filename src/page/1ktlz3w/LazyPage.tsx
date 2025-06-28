import React, { lazy, Suspense } from 'react';

const Page1ktlz3w = lazy(() => import('./Page'));

const LazyPage1ktlz3w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ktlz3w />
  </Suspense>
);

export { LazyPage1ktlz3w };
