import React, { lazy, Suspense } from 'react';

const Page1maptvc = lazy(() => import('./Page'));

const LazyPage1maptvc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maptvc />
  </Suspense>
);

export { LazyPage1maptvc };
