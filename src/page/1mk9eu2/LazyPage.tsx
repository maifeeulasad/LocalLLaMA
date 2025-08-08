import React, { lazy, Suspense } from 'react';

const Page1mk9eu2 = lazy(() => import('./Page'));

const LazyPage1mk9eu2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk9eu2 />
  </Suspense>
);

export { LazyPage1mk9eu2 };
