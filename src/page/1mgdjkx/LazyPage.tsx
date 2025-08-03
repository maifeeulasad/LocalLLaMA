import React, { lazy, Suspense } from 'react';

const Page1mgdjkx = lazy(() => import('./Page'));

const LazyPage1mgdjkx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgdjkx />
  </Suspense>
);

export { LazyPage1mgdjkx };
