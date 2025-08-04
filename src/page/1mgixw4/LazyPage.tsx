import React, { lazy, Suspense } from 'react';

const Page1mgixw4 = lazy(() => import('./Page'));

const LazyPage1mgixw4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgixw4 />
  </Suspense>
);

export { LazyPage1mgixw4 };
