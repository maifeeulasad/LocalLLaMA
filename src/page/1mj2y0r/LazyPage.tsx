import React, { lazy, Suspense } from 'react';

const Page1mj2y0r = lazy(() => import('./Page'));

const LazyPage1mj2y0r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2y0r />
  </Suspense>
);

export { LazyPage1mj2y0r };
