import React, { lazy, Suspense } from 'react';

const Page1mgys0z = lazy(() => import('./Page'));

const LazyPage1mgys0z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgys0z />
  </Suspense>
);

export { LazyPage1mgys0z };
