import React, { lazy, Suspense } from 'react';

const Page1mirbhr = lazy(() => import('./Page'));

const LazyPage1mirbhr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mirbhr />
  </Suspense>
);

export { LazyPage1mirbhr };
