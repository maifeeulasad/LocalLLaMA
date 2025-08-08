import React, { lazy, Suspense } from 'react';

const Page1mk0zih = lazy(() => import('./Page'));

const LazyPage1mk0zih = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk0zih />
  </Suspense>
);

export { LazyPage1mk0zih };
