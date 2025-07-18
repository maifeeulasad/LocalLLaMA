import React, { lazy, Suspense } from 'react';

const Page1m2gios = lazy(() => import('./Page'));

const LazyPage1m2gios = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2gios />
  </Suspense>
);

export { LazyPage1m2gios };
