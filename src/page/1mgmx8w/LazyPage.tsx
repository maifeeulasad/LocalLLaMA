import React, { lazy, Suspense } from 'react';

const Page1mgmx8w = lazy(() => import('./Page'));

const LazyPage1mgmx8w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgmx8w />
  </Suspense>
);

export { LazyPage1mgmx8w };
