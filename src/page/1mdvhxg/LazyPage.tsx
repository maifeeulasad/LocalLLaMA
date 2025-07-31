import React, { lazy, Suspense } from 'react';

const Page1mdvhxg = lazy(() => import('./Page'));

const LazyPage1mdvhxg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdvhxg />
  </Suspense>
);

export { LazyPage1mdvhxg };
