import React, { lazy, Suspense } from 'react';

const Page1ly358h = lazy(() => import('./Page'));

const LazyPage1ly358h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly358h />
  </Suspense>
);

export { LazyPage1ly358h };
