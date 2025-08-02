import React, { lazy, Suspense } from 'react';

const Page1mfeipz = lazy(() => import('./Page'));

const LazyPage1mfeipz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfeipz />
  </Suspense>
);

export { LazyPage1mfeipz };
