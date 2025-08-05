import React, { lazy, Suspense } from 'react';

const Page1mhieis = lazy(() => import('./Page'));

const LazyPage1mhieis = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhieis />
  </Suspense>
);

export { LazyPage1mhieis };
