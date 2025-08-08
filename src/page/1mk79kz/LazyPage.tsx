import React, { lazy, Suspense } from 'react';

const Page1mk79kz = lazy(() => import('./Page'));

const LazyPage1mk79kz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk79kz />
  </Suspense>
);

export { LazyPage1mk79kz };
