import React, { lazy, Suspense } from 'react';

const Page1mbihcz = lazy(() => import('./Page'));

const LazyPage1mbihcz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbihcz />
  </Suspense>
);

export { LazyPage1mbihcz };
