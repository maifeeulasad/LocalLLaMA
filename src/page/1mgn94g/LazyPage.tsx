import React, { lazy, Suspense } from 'react';

const Page1mgn94g = lazy(() => import('./Page'));

const LazyPage1mgn94g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgn94g />
  </Suspense>
);

export { LazyPage1mgn94g };
