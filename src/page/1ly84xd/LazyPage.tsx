import React, { lazy, Suspense } from 'react';

const Page1ly84xd = lazy(() => import('./Page'));

const LazyPage1ly84xd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly84xd />
  </Suspense>
);

export { LazyPage1ly84xd };
