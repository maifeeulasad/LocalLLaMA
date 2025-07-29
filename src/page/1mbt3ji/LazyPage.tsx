import React, { lazy, Suspense } from 'react';

const Page1mbt3ji = lazy(() => import('./Page'));

const LazyPage1mbt3ji = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbt3ji />
  </Suspense>
);

export { LazyPage1mbt3ji };
