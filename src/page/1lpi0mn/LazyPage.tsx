import React, { lazy, Suspense } from 'react';

const Page1lpi0mn = lazy(() => import('./Page'));

const LazyPage1lpi0mn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpi0mn />
  </Suspense>
);

export { LazyPage1lpi0mn };
