import React, { lazy, Suspense } from 'react';

const Page1mknjzx = lazy(() => import('./Page'));

const LazyPage1mknjzx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mknjzx />
  </Suspense>
);

export { LazyPage1mknjzx };
