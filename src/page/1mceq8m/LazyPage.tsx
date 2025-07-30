import React, { lazy, Suspense } from 'react';

const Page1mceq8m = lazy(() => import('./Page'));

const LazyPage1mceq8m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mceq8m />
  </Suspense>
);

export { LazyPage1mceq8m };
