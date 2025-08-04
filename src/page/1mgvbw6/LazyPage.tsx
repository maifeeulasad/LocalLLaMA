import React, { lazy, Suspense } from 'react';

const Page1mgvbw6 = lazy(() => import('./Page'));

const LazyPage1mgvbw6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgvbw6 />
  </Suspense>
);

export { LazyPage1mgvbw6 };
