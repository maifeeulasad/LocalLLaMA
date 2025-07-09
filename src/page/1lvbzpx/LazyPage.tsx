import React, { lazy, Suspense } from 'react';

const Page1lvbzpx = lazy(() => import('./Page'));

const LazyPage1lvbzpx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvbzpx />
  </Suspense>
);

export { LazyPage1lvbzpx };
