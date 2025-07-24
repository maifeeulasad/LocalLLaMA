import React, { lazy, Suspense } from 'react';

const Page1m7hvxz = lazy(() => import('./Page'));

const LazyPage1m7hvxz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7hvxz />
  </Suspense>
);

export { LazyPage1m7hvxz };
