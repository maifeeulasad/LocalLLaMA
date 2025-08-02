import React, { lazy, Suspense } from 'react';

const Page1mf16vx = lazy(() => import('./Page'));

const LazyPage1mf16vx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf16vx />
  </Suspense>
);

export { LazyPage1mf16vx };
