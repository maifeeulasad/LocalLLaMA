import React, { lazy, Suspense } from 'react';

const Page1lz1rv1 = lazy(() => import('./Page'));

const LazyPage1lz1rv1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz1rv1 />
  </Suspense>
);

export { LazyPage1lz1rv1 };
