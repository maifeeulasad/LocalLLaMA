import React, { lazy, Suspense } from 'react';

const Page1mdwums = lazy(() => import('./Page'));

const LazyPage1mdwums = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwums />
  </Suspense>
);

export { LazyPage1mdwums };
