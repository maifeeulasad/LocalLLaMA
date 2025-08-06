import React, { lazy, Suspense } from 'react';

const Page1mimbvg = lazy(() => import('./Page'));

const LazyPage1mimbvg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mimbvg />
  </Suspense>
);

export { LazyPage1mimbvg };
